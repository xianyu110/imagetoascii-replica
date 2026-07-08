import { useEffect, useState } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

import {
  r as apiGet,
  i as apiPatch,
  a as apiPost,
} from './api-client-ddg0Kx1A.js';
import {
  t as Avatar,
  n as AvatarFallback,
  r as AvatarImage,
} from './avatar-ClZeTlv2.js';
import { t as Badge } from './badge-DVIKFGgX.js';
import { t as Button } from './button-RkClB0x2.js';
import { t as Card, n as CardContent } from './card-CJS2GQq6.js';
import { t as DataTable } from './data-table-Df_eQ-7W.js';
import {
  t as Dialog,
  n as DialogContent,
  i as DialogFooter,
  a as DialogHeader,
  o as DialogTitle,
} from './dialog-D6wavpEs.js';
import { t as tDynamic } from './dynamic-BPomKdkd.js';
import { t as ImageUploader } from './image-uploader-BSMgxL3y.js';
import {
  H as admin_tickets_actions_col,
  N as admin_tickets_admin,
  F as admin_tickets_close_ticket,
  j as admin_tickets_created_col,
  q as admin_tickets_description,
  V as admin_tickets_empty,
  M as admin_tickets_latest_reply_col,
  P as admin_tickets_reopen_ticket,
  B as admin_tickets_reply_placeholder,
  z as admin_tickets_reply_submit,
  L as admin_tickets_reply_success,
  R as admin_tickets_replying,
  W as admin_tickets_status_col,
  I as admin_tickets_status_updated,
  J as admin_tickets_title,
  K as admin_tickets_title_col,
  U as admin_tickets_updated_col,
  G as admin_tickets_user_col,
} from './messages-DC2BhyRd.js';
import { t as Textarea } from './textarea-kLCUgc24.js';
import { t as cn } from './utils-C_uf36nf.js';

//#region src/routes/admin/tickets.tsx?tsr-split=component
var TABS = ['all', 'open', 'replied', 'closed'];
/** Extract uploaded URLs from uploader items; true while any upload is in flight. */
function uploaderState(items) {
  return {
    urls: items
      .filter((i) => i.status === 'uploaded' && i.url)
      .map((i) => i.url),
    uploading: items.some((i) => i.status === 'uploading'),
  };
}
function AttachmentGrid({ urls }) {
  if (!urls.length) return null;
  return /* @__PURE__ */ jsx('div', {
    className: 'mt-2 flex flex-wrap gap-2',
    children: urls.map((url, i) =>
      /* @__PURE__ */ jsx(
        'a',
        {
          href: url,
          target: '_blank',
          rel: 'noopener noreferrer',
          children: /* @__PURE__ */ jsx('img', {
            src: url,
            alt: '',
            className:
              'border-border size-16 rounded-md border object-cover transition-opacity hover:opacity-80',
          }),
        },
        `${url}-${i}`
      )
    ),
  });
}
var PAGE_SIZE = 20;
var STATUS_BADGE = {
  open: 'default',
  replied: 'secondary',
  closed: 'outline',
};
function AdminTicketsPage() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState('all');
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [activeTicket, setActiveTicket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState('');
  const [replyAttachments, setReplyAttachments] = useState([]);
  const [replyUploading, setReplyUploading] = useState(false);
  const [replyUploaderKey, setReplyUploaderKey] = useState(0);
  const [replying, setReplying] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, tab]);
  const listQuery = useQuery({
    queryKey: ['admin-tickets', page, tab, debouncedSearch],
    queryFn: () => {
      const params = new URLSearchParams({
        page: String(page),
        pageSize: String(PAGE_SIZE),
      });
      if (tab !== 'all') params.set('status', tab);
      if (debouncedSearch) params.set('keyword', debouncedSearch);
      return apiGet(`/api/admin/tickets?${params}`);
    },
    placeholderData: keepPreviousData,
  });
  const rows = listQuery.data?.items ?? [];
  const total = listQuery.data?.total ?? 0;
  const refreshList = () =>
    queryClient.invalidateQueries({ queryKey: ['admin-tickets'] });
  async function openDetail(row) {
    try {
      const data = await apiGet(`/api/admin/tickets/${row.id}`);
      setActiveTicket({
        ...row,
        ...data.ticket,
      });
      setMessages(data.messages);
      setReplyAttachments([]);
      setReplyUploaderKey((k) => k + 1);
    } catch (e) {
      toast.error(e?.message || 'Failed');
    }
  }
  async function submitReply() {
    if (!activeTicket || !reply.trim()) return;
    setReplying(true);
    try {
      await apiPost(`/api/admin/tickets/${activeTicket.id}`, {
        content: reply,
        attachments: replyAttachments,
      });
      toast.success(admin_tickets_reply_success());
      setReply('');
      await openDetail(activeTicket);
      refreshList();
    } catch (e) {
      toast.error(e?.message || 'Failed');
    } finally {
      setReplying(false);
    }
  }
  async function setStatus(status) {
    if (!activeTicket) return;
    try {
      await apiPatch(`/api/admin/tickets/${activeTicket.id}`, { status });
      toast.success(admin_tickets_status_updated());
      setActiveTicket({
        ...activeTicket,
        status,
      });
      refreshList();
    } catch (e) {
      toast.error(e?.message || 'Failed');
    }
  }
  const columns = [
    {
      header: admin_tickets_created_col(),
      className: 'w-[160px]',
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground',
          children: new Date(r.createdAt).toLocaleString(),
        }),
    },
    {
      header: admin_tickets_title_col(),
      cell: (r) =>
        /* @__PURE__ */ jsx('button', {
          className: 'text-left font-medium hover:underline',
          onClick: () => openDetail(r),
          children: r.title,
        }),
    },
    {
      header: admin_tickets_user_col(),
      cell: (r) =>
        /* @__PURE__ */ jsxs('div', {
          className: 'flex items-center gap-2',
          children: [
            /* @__PURE__ */ jsxs(Avatar, {
              className: 'size-7',
              children: [
                /* @__PURE__ */ jsx(AvatarImage, {
                  src: r.userAvatar || void 0,
                }),
                /* @__PURE__ */ jsx(AvatarFallback, {
                  className: 'text-xs',
                  children: (r.userName || 'U').charAt(0).toUpperCase(),
                }),
              ],
            }),
            /* @__PURE__ */ jsxs('div', {
              className: 'flex flex-col',
              children: [
                /* @__PURE__ */ jsx('span', { children: r.userName || '—' }),
                /* @__PURE__ */ jsx('span', {
                  className: 'text-muted-foreground text-xs',
                  children: r.userEmail,
                }),
              ],
            }),
          ],
        }),
    },
    {
      header: admin_tickets_latest_reply_col(),
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground block max-w-[280px] truncate',
          children: r.latestReply || '—',
        }),
    },
    {
      header: admin_tickets_updated_col(),
      className: 'w-[160px]',
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground',
          children: new Date(r.updatedAt).toLocaleString(),
        }),
    },
    {
      header: admin_tickets_status_col(),
      className: 'w-[120px]',
      cell: (r) =>
        /* @__PURE__ */ jsx(Badge, {
          variant: STATUS_BADGE[r.status],
          children: tDynamic(`admin.tickets.status_${r.status}`),
        }),
    },
    {
      header: admin_tickets_actions_col(),
      className: 'w-[80px]',
      cell: (r) =>
        /* @__PURE__ */ jsx(Button, {
          variant: 'ghost',
          size: 'icon',
          className: 'size-7',
          onClick: () => openDetail(r),
          children: /* @__PURE__ */ jsx(MessageSquare, { className: 'size-4' }),
        }),
    },
  ];
  return /* @__PURE__ */ jsxs('div', {
    className: 'space-y-6 p-6',
    children: [
      /* @__PURE__ */ jsxs('div', {
        children: [
          /* @__PURE__ */ jsx('h1', {
            className: 'text-2xl font-bold',
            children: admin_tickets_title(),
          }),
          /* @__PURE__ */ jsx('p', {
            className: 'text-muted-foreground',
            children: admin_tickets_description(),
          }),
        ],
      }),
      /* @__PURE__ */ jsx('div', {
        className:
          'border-border flex gap-1 overflow-x-auto overflow-y-hidden border-b',
        children: TABS.map((tb) =>
          /* @__PURE__ */ jsx(
            'button',
            {
              onClick: () => setTab(tb),
              className: cn(
                '-mb-px border-b-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors',
                tab === tb
                  ? 'border-primary text-foreground'
                  : 'text-muted-foreground hover:text-foreground border-transparent'
              ),
              children: tDynamic(`admin.tickets.tab_${tb}`),
            },
            tb
          )
        ),
      }),
      /* @__PURE__ */ jsx(Card, {
        children: /* @__PURE__ */ jsx(CardContent, {
          children: /* @__PURE__ */ jsx(DataTable, {
            columns,
            data: rows,
            total,
            page,
            pageSize: PAGE_SIZE,
            onPageChange: setPage,
            rowKey: (r) => r.id,
            emptyText: admin_tickets_empty(),
            search,
            onSearchChange: setSearch,
            onRefresh: () => listQuery.refetch(),
            loading: listQuery.isFetching,
          }),
        }),
      }),
      /* @__PURE__ */ jsx(Dialog, {
        open: !!activeTicket,
        onOpenChange: (v) => !v && setActiveTicket(null),
        children: /* @__PURE__ */ jsxs(DialogContent, {
          className: 'sm:max-w-2xl',
          children: [
            /* @__PURE__ */ jsxs(DialogHeader, {
              children: [
                /* @__PURE__ */ jsxs(DialogTitle, {
                  className: 'flex items-center gap-2',
                  children: [
                    activeTicket?.title,
                    activeTicket &&
                      /* @__PURE__ */ jsx(Badge, {
                        variant: STATUS_BADGE[activeTicket.status],
                        children: tDynamic(
                          `admin.tickets.status_${activeTicket.status}`
                        ),
                      }),
                  ],
                }),
                activeTicket &&
                  /* @__PURE__ */ jsxs('p', {
                    className:
                      'text-muted-foreground flex items-center gap-1.5 text-sm',
                    children: [
                      /* @__PURE__ */ jsxs(Avatar, {
                        className: 'size-5',
                        children: [
                          /* @__PURE__ */ jsx(AvatarImage, {
                            src: activeTicket.userAvatar || void 0,
                          }),
                          /* @__PURE__ */ jsx(AvatarFallback, {
                            className: 'text-[10px]',
                            children: (activeTicket.userName || 'U')
                              .charAt(0)
                              .toUpperCase(),
                          }),
                        ],
                      }),
                      activeTicket.userName || '—',
                      ' · ',
                      activeTicket.userEmail,
                    ],
                  }),
              ],
            }),
            /* @__PURE__ */ jsx('div', {
              className: 'max-h-[50vh] space-y-3 overflow-y-auto py-2',
              children: messages.map((msg) =>
                /* @__PURE__ */ jsxs(
                  'div',
                  {
                    className: cn(
                      'rounded-lg p-3 text-sm',
                      msg.role === 'admin'
                        ? 'bg-primary/10 ml-8'
                        : 'bg-muted mr-8'
                    ),
                    children: [
                      /* @__PURE__ */ jsxs('div', {
                        className: 'mb-1 flex items-center justify-between',
                        children: [
                          /* @__PURE__ */ jsxs('span', {
                            className:
                              'flex items-center gap-1.5 text-xs font-medium',
                            children: [
                              msg.role === 'user' &&
                                /* @__PURE__ */ jsxs(Avatar, {
                                  className: 'size-5',
                                  children: [
                                    /* @__PURE__ */ jsx(AvatarImage, {
                                      src: msg.userAvatar || void 0,
                                    }),
                                    /* @__PURE__ */ jsx(AvatarFallback, {
                                      className: 'text-[10px]',
                                      children: (msg.userName || 'U')
                                        .charAt(0)
                                        .toUpperCase(),
                                    }),
                                  ],
                                }),
                              msg.userName ||
                                (msg.role === 'admin'
                                  ? admin_tickets_admin()
                                  : '—'),
                              msg.role === 'admin' &&
                                /* @__PURE__ */ jsx(Badge, {
                                  variant: 'secondary',
                                  className: 'px-1 py-0 text-[10px]',
                                  children: admin_tickets_admin(),
                                }),
                            ],
                          }),
                          /* @__PURE__ */ jsx('span', {
                            className: 'text-muted-foreground text-xs',
                            children: new Date(msg.createdAt).toLocaleString(),
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsx('p', {
                        className: 'whitespace-pre-wrap',
                        children: msg.content,
                      }),
                      /* @__PURE__ */ jsx(AttachmentGrid, {
                        urls: msg.attachments,
                      }),
                    ],
                  },
                  msg.id
                )
              ),
            }),
            /* @__PURE__ */ jsxs('div', {
              className: 'space-y-3',
              children: [
                activeTicket?.status !== 'closed' &&
                  /* @__PURE__ */ jsxs(Fragment, {
                    children: [
                      /* @__PURE__ */ jsx(Textarea, {
                        value: reply,
                        maxLength: 5e3,
                        rows: 3,
                        onChange: (e) => setReply(e.target.value),
                        placeholder: admin_tickets_reply_placeholder(),
                      }),
                      /* @__PURE__ */ jsx(
                        ImageUploader,
                        {
                          allowMultiple: true,
                          maxImages: 9,
                          onChange: (items) => {
                            const { urls, uploading: busy } =
                              uploaderState(items);
                            setReplyAttachments(urls);
                            setReplyUploading(busy);
                          },
                        },
                        replyUploaderKey
                      ),
                    ],
                  }),
                /* @__PURE__ */ jsx(DialogFooter, {
                  children:
                    activeTicket?.status !== 'closed'
                      ? /* @__PURE__ */ jsxs(Fragment, {
                          children: [
                            /* @__PURE__ */ jsx(Button, {
                              variant: 'outline',
                              onClick: () => setStatus('closed'),
                              children: admin_tickets_close_ticket(),
                            }),
                            /* @__PURE__ */ jsx(Button, {
                              onClick: submitReply,
                              disabled:
                                replying || replyUploading || !reply.trim(),
                              children: replying
                                ? admin_tickets_replying()
                                : admin_tickets_reply_submit(),
                            }),
                          ],
                        })
                      : /* @__PURE__ */ jsx(Button, {
                          variant: 'outline',
                          onClick: () => setStatus('open'),
                          children: admin_tickets_reopen_ticket(),
                        }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
//#endregion
export { AdminTicketsPage as component };
