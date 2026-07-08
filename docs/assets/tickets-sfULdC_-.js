import { useEffect, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { MessageSquare, Plus } from 'lucide-react';
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
  r as DialogDescription,
  i as DialogFooter,
  a as DialogHeader,
  o as DialogTitle,
} from './dialog-D6wavpEs.js';
import { t as tDynamic } from './dynamic-BPomKdkd.js';
import { t as ImageUploader } from './image-uploader-BSMgxL3y.js';
import { t as Input } from './input-B6v4Jp25.js';
import { t as Label } from './label-Dzpc0zKw.js';
import {
  Ja as settings_tickets_actions_col,
  Na as settings_tickets_attachments_label,
  Ia as settings_tickets_cancel,
  Wa as settings_tickets_close_success,
  Ua as settings_tickets_close_ticket,
  Ha as settings_tickets_closed_notice,
  $a as settings_tickets_content_label,
  Qa as settings_tickets_content_placeholder,
  io as settings_tickets_create_button,
  no as settings_tickets_create_description,
  Fa as settings_tickets_create_submit,
  Ga as settings_tickets_create_success,
  ro as settings_tickets_create_title,
  ja as settings_tickets_created_col,
  Pa as settings_tickets_creating,
  ao as settings_tickets_description,
  qa as settings_tickets_empty,
  Ma as settings_tickets_latest_reply_col,
  Va as settings_tickets_reply_placeholder,
  Ba as settings_tickets_reply_submit,
  za as settings_tickets_replying,
  Ka as settings_tickets_required,
  Xa as settings_tickets_status_col,
  Ra as settings_tickets_support_team,
  oo as settings_tickets_title,
  Za as settings_tickets_title_col,
  to as settings_tickets_title_label,
  eo as settings_tickets_title_placeholder,
  Ya as settings_tickets_updated_col,
  La as settings_tickets_you,
} from './messages-DC2BhyRd.js';
import { t as Textarea } from './textarea-kLCUgc24.js';
import { t as cn } from './utils-C_uf36nf.js';

//#region src/routes/settings/tickets.tsx?tsr-split=component
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
var PAGE_SIZE = 10;
var STATUS_BADGE = {
  open: 'default',
  replied: 'secondary',
  closed: 'outline',
};
function TicketsPage() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [createOpen, setCreateOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploaderKey, setUploaderKey] = useState(0);
  const [submitting, setSubmitting] = useState(false);
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
  }, [debouncedSearch]);
  const listQuery = useQuery({
    queryKey: ['user-tickets', page, debouncedSearch],
    queryFn: () => {
      const params = new URLSearchParams({
        page: String(page),
        pageSize: String(PAGE_SIZE),
      });
      if (debouncedSearch) params.set('keyword', debouncedSearch);
      return apiGet(`/api/tickets?${params}`);
    },
    placeholderData: keepPreviousData,
  });
  const rows = listQuery.data?.items ?? [];
  const total = listQuery.data?.total ?? 0;
  const refreshList = () =>
    queryClient.invalidateQueries({ queryKey: ['user-tickets'] });
  async function openDetail(row) {
    try {
      const data = await apiGet(`/api/tickets/${row.id}`);
      setActiveTicket(data.ticket);
      setMessages(data.messages);
      setReplyAttachments([]);
      setReplyUploaderKey((k) => k + 1);
    } catch (e) {
      toast.error(e?.message || 'Failed');
    }
  }
  async function submitCreate() {
    if (!title.trim() || !content.trim()) {
      toast.error(settings_tickets_required());
      return;
    }
    setSubmitting(true);
    try {
      await apiPost('/api/tickets', {
        title,
        content,
        attachments,
      });
      toast.success(settings_tickets_create_success());
      setCreateOpen(false);
      setTitle('');
      setContent('');
      setAttachments([]);
      setUploaderKey((k) => k + 1);
      setPage(1);
      refreshList();
    } catch (e) {
      toast.error(e?.message || 'Failed');
    } finally {
      setSubmitting(false);
    }
  }
  async function submitReply() {
    if (!activeTicket || !reply.trim()) return;
    setReplying(true);
    try {
      await apiPost(`/api/tickets/${activeTicket.id}`, {
        content: reply,
        attachments: replyAttachments,
      });
      setReply('');
      await openDetail(activeTicket);
      refreshList();
    } catch (e) {
      toast.error(e?.message || 'Failed');
    } finally {
      setReplying(false);
    }
  }
  async function closeTicket() {
    if (!activeTicket) return;
    try {
      await apiPatch(`/api/tickets/${activeTicket.id}`, { status: 'closed' });
      toast.success(settings_tickets_close_success());
      setActiveTicket(null);
      refreshList();
    } catch (e) {
      toast.error(e?.message || 'Failed');
    }
  }
  const columns = [
    {
      header: settings_tickets_created_col(),
      className: 'w-[160px]',
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground',
          children: new Date(r.createdAt).toLocaleString(),
        }),
    },
    {
      header: settings_tickets_title_col(),
      cell: (r) =>
        /* @__PURE__ */ jsx('button', {
          className: 'text-left font-medium hover:underline',
          onClick: () => openDetail(r),
          children: r.title,
        }),
    },
    {
      header: settings_tickets_latest_reply_col(),
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground block max-w-[280px] truncate',
          children: r.latestReply || '—',
        }),
    },
    {
      header: settings_tickets_updated_col(),
      className: 'w-[160px]',
      cell: (r) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground',
          children: new Date(r.updatedAt).toLocaleString(),
        }),
    },
    {
      header: settings_tickets_status_col(),
      className: 'w-[120px]',
      cell: (r) =>
        /* @__PURE__ */ jsx(Badge, {
          variant: STATUS_BADGE[r.status],
          children: tDynamic(`settings.tickets.status_${r.status}`),
        }),
    },
    {
      header: settings_tickets_actions_col(),
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
        className: 'flex items-start justify-between gap-4',
        children: [
          /* @__PURE__ */ jsxs('div', {
            children: [
              /* @__PURE__ */ jsx('h1', {
                className: 'text-2xl font-bold',
                children: settings_tickets_title(),
              }),
              /* @__PURE__ */ jsx('p', {
                className: 'text-muted-foreground',
                children: settings_tickets_description(),
              }),
            ],
          }),
          /* @__PURE__ */ jsxs(Button, {
            onClick: () => setCreateOpen(true),
            className: 'gap-2',
            children: [
              /* @__PURE__ */ jsx(Plus, { className: 'size-4' }),
              settings_tickets_create_button(),
            ],
          }),
        ],
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
            emptyText: settings_tickets_empty(),
            search,
            onSearchChange: setSearch,
            onRefresh: () => listQuery.refetch(),
            loading: listQuery.isFetching,
          }),
        }),
      }),
      /* @__PURE__ */ jsx(Dialog, {
        open: createOpen,
        onOpenChange: setCreateOpen,
        children: /* @__PURE__ */ jsxs(DialogContent, {
          children: [
            /* @__PURE__ */ jsxs(DialogHeader, {
              children: [
                /* @__PURE__ */ jsx(DialogTitle, {
                  children: settings_tickets_create_title(),
                }),
                /* @__PURE__ */ jsx(DialogDescription, {
                  children: settings_tickets_create_description(),
                }),
              ],
            }),
            /* @__PURE__ */ jsxs('div', {
              className: 'space-y-4 py-2',
              children: [
                /* @__PURE__ */ jsxs('div', {
                  className: 'space-y-1.5',
                  children: [
                    /* @__PURE__ */ jsx(Label, {
                      htmlFor: 'ticket-title',
                      children: settings_tickets_title_label(),
                    }),
                    /* @__PURE__ */ jsx(Input, {
                      id: 'ticket-title',
                      value: title,
                      maxLength: 200,
                      onChange: (e) => setTitle(e.target.value),
                      placeholder: settings_tickets_title_placeholder(),
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs('div', {
                  className: 'space-y-1.5',
                  children: [
                    /* @__PURE__ */ jsx(Label, {
                      htmlFor: 'ticket-content',
                      children: settings_tickets_content_label(),
                    }),
                    /* @__PURE__ */ jsx(Textarea, {
                      id: 'ticket-content',
                      value: content,
                      maxLength: 5e3,
                      rows: 6,
                      onChange: (e) => setContent(e.target.value),
                      placeholder: settings_tickets_content_placeholder(),
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs('div', {
                  className: 'space-y-1.5',
                  children: [
                    /* @__PURE__ */ jsx(Label, {
                      children: settings_tickets_attachments_label(),
                    }),
                    /* @__PURE__ */ jsx(
                      ImageUploader,
                      {
                        allowMultiple: true,
                        maxImages: 9,
                        onChange: (items) => {
                          const { urls, uploading: busy } =
                            uploaderState(items);
                          setAttachments(urls);
                          setUploading(busy);
                        },
                      },
                      uploaderKey
                    ),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsxs(DialogFooter, {
              children: [
                /* @__PURE__ */ jsx(Button, {
                  variant: 'outline',
                  onClick: () => setCreateOpen(false),
                  children: settings_tickets_cancel(),
                }),
                /* @__PURE__ */ jsx(Button, {
                  onClick: submitCreate,
                  disabled: submitting || uploading,
                  children: submitting
                    ? settings_tickets_creating()
                    : settings_tickets_create_submit(),
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx(Dialog, {
        open: !!activeTicket,
        onOpenChange: (v) => !v && setActiveTicket(null),
        children: /* @__PURE__ */ jsxs(DialogContent, {
          className: 'sm:max-w-2xl',
          children: [
            /* @__PURE__ */ jsx(DialogHeader, {
              children: /* @__PURE__ */ jsxs(DialogTitle, {
                className: 'flex items-center gap-2',
                children: [
                  activeTicket?.title,
                  activeTicket &&
                    /* @__PURE__ */ jsx(Badge, {
                      variant: STATUS_BADGE[activeTicket.status],
                      children: tDynamic(
                        `settings.tickets.status_${activeTicket.status}`
                      ),
                    }),
                ],
              }),
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
                        ? 'bg-primary/10 mr-8'
                        : 'bg-muted ml-8'
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
                              msg.role === 'admin'
                                ? settings_tickets_support_team()
                                : msg.userName || settings_tickets_you(),
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
            activeTicket?.status !== 'closed'
              ? /* @__PURE__ */ jsxs('div', {
                  className: 'space-y-3',
                  children: [
                    /* @__PURE__ */ jsx(Textarea, {
                      value: reply,
                      maxLength: 5e3,
                      rows: 3,
                      onChange: (e) => setReply(e.target.value),
                      placeholder: settings_tickets_reply_placeholder(),
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
                    /* @__PURE__ */ jsxs(DialogFooter, {
                      children: [
                        /* @__PURE__ */ jsx(Button, {
                          variant: 'outline',
                          onClick: closeTicket,
                          children: settings_tickets_close_ticket(),
                        }),
                        /* @__PURE__ */ jsx(Button, {
                          onClick: submitReply,
                          disabled: replying || replyUploading || !reply.trim(),
                          children: replying
                            ? settings_tickets_replying()
                            : settings_tickets_reply_submit(),
                        }),
                      ],
                    }),
                  ],
                })
              : /* @__PURE__ */ jsx('p', {
                  className: 'text-muted-foreground text-sm',
                  children: settings_tickets_closed_notice(),
                }),
          ],
        }),
      }),
    ],
  });
}
//#endregion
export { TicketsPage as component };
