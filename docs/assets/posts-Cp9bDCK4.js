import { useEffect, useRef, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useForm } from '@tanstack/react-form';
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { Image as Image$1 } from '@tiptap/extension-image';
import { Placeholder } from '@tiptap/extension-placeholder';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  Bold,
  Code,
  Heading2,
  Heading3,
  Image,
  Italic,
  Link,
  List,
  ListOrdered,
  Loader2,
  Minus,
  Pencil,
  Plus,
  Quote,
  Redo,
  SquareCode,
  Strikethrough,
  Trash2,
  Undo,
  Unlink,
} from 'lucide-react';
import MarkdownIt from 'markdown-it';
import { toast } from 'sonner';
import TurndownService from 'turndown';
import { z } from 'zod';

import {
  n as apiDelete,
  r as apiGet,
  a as apiPost,
  o as apiPut,
} from './api-client-ddg0Kx1A.js';
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
  s as DialogTrigger,
} from './dialog-D6wavpEs.js';
import { t as tDynamic } from './dynamic-BPomKdkd.js';
import { t as TextField } from './form-field-DX3nwIlh.js';
import { t as Label } from './label-Dzpc0zKw.js';
import { n as markdownStyles } from './markdown-content-DAIMZpSI.js';
import {
  er as admin_posts_actions_col,
  rr as admin_posts_author_col,
  Bn as admin_posts_author_field,
  zn as admin_posts_author_placeholder,
  An as admin_posts_cancel,
  In as admin_posts_category_field,
  Fn as admin_posts_category_placeholder,
  kn as admin_posts_confirm_delete,
  Rn as admin_posts_content_field,
  Ln as admin_posts_content_placeholder,
  $n as admin_posts_create,
  Zn as admin_posts_create_description,
  Qn as admin_posts_create_title,
  On as admin_posts_created,
  tr as admin_posts_created_at,
  qn as admin_posts_delete_confirm,
  Jn as admin_posts_delete_title,
  En as admin_posts_deleted,
  sr as admin_posts_description,
  Hn as admin_posts_description_field,
  Vn as admin_posts_description_placeholder,
  Yn as admin_posts_edit_description,
  Xn as admin_posts_edit_title,
  or as admin_posts_no_data,
  jn as admin_posts_save,
  ir as admin_posts_slug_col,
  Kn as admin_posts_slug_field,
  Gn as admin_posts_slug_placeholder,
  nr as admin_posts_status_col,
  Nn as admin_posts_status_draft,
  Pn as admin_posts_status_field,
  Mn as admin_posts_status_published,
  cr as admin_posts_title,
  ar as admin_posts_title_col,
  Wn as admin_posts_title_field,
  Un as admin_posts_title_placeholder,
  Dn as admin_posts_updated,
} from './messages-DC2BhyRd.js';
import {
  t as Select,
  n as SelectContent,
  r as SelectItem,
  i as SelectTrigger,
  a as SelectValue,
} from './select-C0G4MHuP.js';
import { t as cn } from './utils-C_uf36nf.js';

//#region src/components/rich-text-editor.tsx
var md = new MarkdownIt({
  html: false,
  linkify: true,
});
var turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
  emDelimiter: '*',
});
turndown.addRule('strikethrough', {
  filter: ['del', 's'],
  replacement: (content) => `~~${content}~~`,
});
turndown.keep(['figure']);
function mdToHtml(markdown) {
  return markdown ? md.render(markdown) : '';
}
function htmlToMd(html) {
  return turndown.turndown(html);
}
function ToolbarButton({ onClick, active, disabled, label, children }) {
  return /* @__PURE__ */ jsx(Button, {
    type: 'button',
    variant: active ? 'secondary' : 'ghost',
    size: 'icon',
    className: 'size-8',
    onClick,
    disabled,
    'aria-label': label,
    title: label,
    children,
  });
}
function Toolbar({ editor, uploading, onPickImage }) {
  const chain = () => editor.chain().focus();
  function setLink() {
    const previous = editor.getAttributes('link').href;
    const url = window.prompt('URL', previous || 'https://');
    if (url === null) return;
    if (url === '') {
      chain().extendMarkRange('link').unsetLink().run();
      return;
    }
    chain().extendMarkRange('link').setLink({ href: url }).run();
  }
  return /* @__PURE__ */ jsxs('div', {
    className:
      'border-border bg-muted/30 flex flex-wrap items-center gap-0.5 border-b p-1',
    children: [
      /* @__PURE__ */ jsx(ToolbarButton, {
        label: 'Bold',
        active: editor.isActive('bold'),
        onClick: () => chain().toggleBold().run(),
        children: /* @__PURE__ */ jsx(Bold, { className: 'size-4' }),
      }),
      /* @__PURE__ */ jsx(ToolbarButton, {
        label: 'Italic',
        active: editor.isActive('italic'),
        onClick: () => chain().toggleItalic().run(),
        children: /* @__PURE__ */ jsx(Italic, { className: 'size-4' }),
      }),
      /* @__PURE__ */ jsx(ToolbarButton, {
        label: 'Strikethrough',
        active: editor.isActive('strike'),
        onClick: () => chain().toggleStrike().run(),
        children: /* @__PURE__ */ jsx(Strikethrough, { className: 'size-4' }),
      }),
      /* @__PURE__ */ jsx(ToolbarButton, {
        label: 'Inline code',
        active: editor.isActive('code'),
        onClick: () => chain().toggleCode().run(),
        children: /* @__PURE__ */ jsx(Code, { className: 'size-4' }),
      }),
      /* @__PURE__ */ jsx('span', { className: 'bg-border mx-1 h-5 w-px' }),
      /* @__PURE__ */ jsx(ToolbarButton, {
        label: 'Heading 2',
        active: editor.isActive('heading', { level: 2 }),
        onClick: () => chain().toggleHeading({ level: 2 }).run(),
        children: /* @__PURE__ */ jsx(Heading2, { className: 'size-4' }),
      }),
      /* @__PURE__ */ jsx(ToolbarButton, {
        label: 'Heading 3',
        active: editor.isActive('heading', { level: 3 }),
        onClick: () => chain().toggleHeading({ level: 3 }).run(),
        children: /* @__PURE__ */ jsx(Heading3, { className: 'size-4' }),
      }),
      /* @__PURE__ */ jsx('span', { className: 'bg-border mx-1 h-5 w-px' }),
      /* @__PURE__ */ jsx(ToolbarButton, {
        label: 'Bullet list',
        active: editor.isActive('bulletList'),
        onClick: () => chain().toggleBulletList().run(),
        children: /* @__PURE__ */ jsx(List, { className: 'size-4' }),
      }),
      /* @__PURE__ */ jsx(ToolbarButton, {
        label: 'Ordered list',
        active: editor.isActive('orderedList'),
        onClick: () => chain().toggleOrderedList().run(),
        children: /* @__PURE__ */ jsx(ListOrdered, { className: 'size-4' }),
      }),
      /* @__PURE__ */ jsx(ToolbarButton, {
        label: 'Blockquote',
        active: editor.isActive('blockquote'),
        onClick: () => chain().toggleBlockquote().run(),
        children: /* @__PURE__ */ jsx(Quote, { className: 'size-4' }),
      }),
      /* @__PURE__ */ jsx(ToolbarButton, {
        label: 'Code block',
        active: editor.isActive('codeBlock'),
        onClick: () => chain().toggleCodeBlock().run(),
        children: /* @__PURE__ */ jsx(SquareCode, { className: 'size-4' }),
      }),
      /* @__PURE__ */ jsx('span', { className: 'bg-border mx-1 h-5 w-px' }),
      /* @__PURE__ */ jsx(ToolbarButton, {
        label: 'Link',
        active: editor.isActive('link'),
        onClick: setLink,
        children: /* @__PURE__ */ jsx(Link, { className: 'size-4' }),
      }),
      /* @__PURE__ */ jsx(ToolbarButton, {
        label: 'Remove link',
        disabled: !editor.isActive('link'),
        onClick: () => chain().unsetLink().run(),
        children: /* @__PURE__ */ jsx(Unlink, { className: 'size-4' }),
      }),
      /* @__PURE__ */ jsx(ToolbarButton, {
        label: 'Insert image',
        disabled: uploading,
        onClick: onPickImage,
        children: uploading
          ? /* @__PURE__ */ jsx(Loader2, { className: 'size-4 animate-spin' })
          : /* @__PURE__ */ jsx(Image, { className: 'size-4' }),
      }),
      /* @__PURE__ */ jsx(ToolbarButton, {
        label: 'Horizontal rule',
        onClick: () => chain().setHorizontalRule().run(),
        children: /* @__PURE__ */ jsx(Minus, { className: 'size-4' }),
      }),
      /* @__PURE__ */ jsx('span', { className: 'bg-border mx-1 h-5 w-px' }),
      /* @__PURE__ */ jsx(ToolbarButton, {
        label: 'Undo',
        disabled: !editor.can().undo(),
        onClick: () => chain().undo().run(),
        children: /* @__PURE__ */ jsx(Undo, { className: 'size-4' }),
      }),
      /* @__PURE__ */ jsx(ToolbarButton, {
        label: 'Redo',
        disabled: !editor.can().redo(),
        onClick: () => chain().redo().run(),
        children: /* @__PURE__ */ jsx(Redo, { className: 'size-4' }),
      }),
    ],
  });
}
function RichTextEditor({ value, onChange, placeholder, className }) {
  const lastEmitted = useRef(value);
  const fileInputRef = useRef(null);
  const uploadingRef = useRef(false);
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        link: { openOnClick: false },
        heading: { levels: [1, 2, 3] },
      }),
      Image$1,
      Placeholder.configure({ placeholder: placeholder || '' }),
    ],
    content: mdToHtml(value),
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: cn(
          markdownStyles,
          'min-h-[280px] max-w-none p-4 focus:outline-none'
        ),
      },
    },
    onUpdate: ({ editor }) => {
      const markdown = editor.isEmpty ? '' : htmlToMd(editor.getHTML());
      lastEmitted.current = markdown;
      onChange(markdown);
    },
  });
  useEffect(() => {
    if (!editor || value === lastEmitted.current) return;
    lastEmitted.current = value;
    editor.commands.setContent(mdToHtml(value));
  }, [editor, value]);
  async function handleFiles(files) {
    if (!editor || !files?.length || uploadingRef.current) return;
    uploadingRef.current = true;
    try {
      const formData = new FormData();
      formData.append('files', files[0]);
      const data = await (
        await fetch('/api/storage/upload-image', {
          method: 'POST',
          body: formData,
        })
      ).json();
      const url = data?.data?.urls?.[0];
      if (data.code === 0 && url)
        editor.chain().focus().setImage({ src: url }).run();
      else toast.error(data.message || 'Upload failed');
    } catch {
      toast.error('Upload failed');
    } finally {
      uploadingRef.current = false;
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  }
  if (!editor)
    return /* @__PURE__ */ jsx('div', {
      className: cn(
        'border-input min-h-[330px] rounded-md border bg-transparent',
        className
      ),
    });
  return /* @__PURE__ */ jsxs('div', {
    className: cn(
      'border-input focus-within:border-ring focus-within:ring-ring/50 overflow-hidden rounded-md border bg-transparent focus-within:ring-[3px]',
      className
    ),
    children: [
      /* @__PURE__ */ jsx(Toolbar, {
        editor,
        uploading: uploadingRef.current,
        onPickImage: () => fileInputRef.current?.click(),
      }),
      /* @__PURE__ */ jsx('input', {
        ref: fileInputRef,
        type: 'file',
        accept: 'image/*',
        className: 'hidden',
        onChange: (e) => handleFiles(e.target.files),
      }),
      /* @__PURE__ */ jsx('div', {
        className: 'max-h-[50vh] overflow-y-auto',
        children: /* @__PURE__ */ jsx(EditorContent, { editor }),
      }),
    ],
  });
}
//#endregion
//#region src/routes/admin/posts.tsx?tsr-split=component
var PAGE_SIZE = 10;
var TABS = ['all', 'published', 'draft'];
var postSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string(),
  content: z.string(),
  categories: z.string(),
  authorName: z.string(),
  status: z.string(),
});
var emptyForm = {
  slug: '',
  title: '',
  description: '',
  content: '',
  categories: '',
  authorName: '',
  status: 'draft',
};
function PostsPage() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState('all');
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [createOpen, setCreateOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [deletingPost, setDeletingPost] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);
  useEffect(() => {
    setPage(1);
  }, [tab, debouncedSearch]);
  const categoryOptions =
    useQuery({
      queryKey: ['admin-categories', 'options'],
      queryFn: () => apiGet('/api/admin/categories?all=true'),
    }).data ?? [];
  const listQuery = useQuery({
    queryKey: ['admin-posts', page, tab, debouncedSearch],
    queryFn: () => {
      const params = new URLSearchParams({
        page: String(page),
        pageSize: String(PAGE_SIZE),
      });
      if (tab !== 'all') params.set('status', tab);
      if (debouncedSearch) params.set('search', debouncedSearch);
      return apiGet(`/api/admin/posts?${params}`);
    },
    placeholderData: keepPreviousData,
  });
  const createForm = useForm({
    defaultValues: emptyForm,
    validators: { onSubmit: postSchema },
    onSubmit: async ({ value }) => {
      await createMutation.mutateAsync(value);
    },
  });
  const editForm = useForm({
    defaultValues: emptyForm,
    validators: { onSubmit: postSchema },
    onSubmit: async ({ value }) => {
      if (!editingPost) return;
      const body = {
        id: editingPost.id,
        ...value,
      };
      if (!body.content) delete body.content;
      await editMutation.mutateAsync(body);
    },
  });
  const createMutation = useMutation({
    mutationFn: (value) => apiPost('/api/admin/posts', value),
    onSuccess: () => {
      toast.success(admin_posts_created());
      setCreateOpen(false);
      createForm.reset();
      queryClient.invalidateQueries({ queryKey: ['admin-posts'] });
    },
    onError: (e) => toast.error(e.message),
  });
  const editMutation = useMutation({
    mutationFn: (body) => apiPut('/api/admin/posts', body),
    onSuccess: () => {
      toast.success(admin_posts_updated());
      setEditingPost(null);
      editForm.reset();
      queryClient.invalidateQueries({ queryKey: ['admin-posts'] });
    },
    onError: (e) => toast.error(e.message),
  });
  const deleteMutation = useMutation({
    mutationFn: (id) => apiDelete(`/api/admin/posts?id=${id}`),
    onSuccess: () => {
      toast.success(admin_posts_deleted());
      setDeletingPost(null);
      queryClient.invalidateQueries({ queryKey: ['admin-posts'] });
    },
    onError: (e) => toast.error(e.message),
  });
  function openEdit(p) {
    editForm.reset({
      slug: p.slug,
      title: p.title,
      description: p.description || '',
      content: '',
      categories: p.categories || '',
      authorName: p.authorName || '',
      status: p.status,
    });
    setEditingPost(p);
    apiGet(`/api/admin/posts?id=${p.id}`)
      .then((post) => editForm.setFieldValue('content', post.content || ''))
      .catch(() => {});
  }
  const statusVariant = (s) => {
    if (s === 'published') return 'default';
    if (s === 'draft') return 'secondary';
    return 'outline';
  };
  const columns = [
    {
      header: admin_posts_title_col(),
      cell: (p) =>
        /* @__PURE__ */ jsx('span', {
          className: 'font-medium',
          children: p.title,
        }),
    },
    {
      header: admin_posts_slug_col(),
      cell: (p) =>
        /* @__PURE__ */ jsx('span', {
          className: 'font-mono text-xs',
          children: p.slug,
        }),
    },
    {
      header: admin_posts_author_col(),
      cell: (p) => p.authorName || '—',
    },
    {
      header: admin_posts_status_col(),
      cell: (p) =>
        /* @__PURE__ */ jsx(Badge, {
          variant: statusVariant(p.status),
          children: p.status,
        }),
    },
    {
      header: admin_posts_created_at(),
      cell: (p) =>
        /* @__PURE__ */ jsx('span', {
          className: 'text-muted-foreground text-sm',
          children: new Date(p.createdAt).toLocaleDateString(),
        }),
    },
    {
      header: admin_posts_actions_col(),
      className: 'w-[80px]',
      cell: (p) =>
        /* @__PURE__ */ jsxs('div', {
          className: 'flex gap-1',
          children: [
            /* @__PURE__ */ jsx(Button, {
              variant: 'ghost',
              size: 'icon',
              className: 'size-7',
              onClick: () => openEdit(p),
              children: /* @__PURE__ */ jsx(Pencil, { className: 'size-3' }),
            }),
            /* @__PURE__ */ jsx(Button, {
              variant: 'ghost',
              size: 'icon',
              className: 'size-7',
              onClick: () => setDeletingPost(p),
              children: /* @__PURE__ */ jsx(Trash2, { className: 'size-3' }),
            }),
          ],
        }),
    },
  ];
  function renderFields(form) {
    return /* @__PURE__ */ jsxs('div', {
      className: 'space-y-4 py-4',
      children: [
        /* @__PURE__ */ jsx(form.Field, {
          name: 'slug',
          children: (field) =>
            /* @__PURE__ */ jsx(TextField, {
              field,
              label: admin_posts_slug_field(),
              placeholder: admin_posts_slug_placeholder(),
            }),
        }),
        /* @__PURE__ */ jsx(form.Field, {
          name: 'title',
          children: (field) =>
            /* @__PURE__ */ jsx(TextField, {
              field,
              label: admin_posts_title_field(),
              placeholder: admin_posts_title_placeholder(),
            }),
        }),
        /* @__PURE__ */ jsx(form.Field, {
          name: 'description',
          children: (field) =>
            /* @__PURE__ */ jsx(TextField, {
              field,
              label: admin_posts_description_field(),
              placeholder: admin_posts_description_placeholder(),
            }),
        }),
        /* @__PURE__ */ jsx(form.Field, {
          name: 'authorName',
          children: (field) =>
            /* @__PURE__ */ jsx(TextField, {
              field,
              label: admin_posts_author_field(),
              placeholder: admin_posts_author_placeholder(),
            }),
        }),
        /* @__PURE__ */ jsx(form.Field, {
          name: 'categories',
          children: (field) =>
            /* @__PURE__ */ jsxs('div', {
              className: 'space-y-2',
              children: [
                /* @__PURE__ */ jsx(Label, {
                  children: admin_posts_category_field(),
                }),
                /* @__PURE__ */ jsxs(Select, {
                  value: field.state.value || '',
                  onValueChange: (v) => field.handleChange(v || ''),
                  children: [
                    /* @__PURE__ */ jsx(SelectTrigger, {
                      children: /* @__PURE__ */ jsx(SelectValue, {
                        placeholder: admin_posts_category_placeholder(),
                      }),
                    }),
                    /* @__PURE__ */ jsx(SelectContent, {
                      children: categoryOptions.map((c) =>
                        /* @__PURE__ */ jsx(
                          SelectItem,
                          {
                            value: c.id,
                            children: c.title,
                          },
                          c.id
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
        }),
        /* @__PURE__ */ jsx(form.Field, {
          name: 'status',
          children: (field) =>
            /* @__PURE__ */ jsxs('div', {
              className: 'space-y-2',
              children: [
                /* @__PURE__ */ jsx(Label, {
                  children: admin_posts_status_field(),
                }),
                /* @__PURE__ */ jsxs(Select, {
                  value: field.state.value || 'draft',
                  onValueChange: (v) => field.handleChange(v || 'draft'),
                  children: [
                    /* @__PURE__ */ jsx(SelectTrigger, {
                      children: /* @__PURE__ */ jsx(SelectValue, {}),
                    }),
                    /* @__PURE__ */ jsxs(SelectContent, {
                      children: [
                        /* @__PURE__ */ jsx(SelectItem, {
                          value: 'draft',
                          children: admin_posts_status_draft(),
                        }),
                        /* @__PURE__ */ jsx(SelectItem, {
                          value: 'published',
                          children: admin_posts_status_published(),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        }),
        /* @__PURE__ */ jsx(form.Field, {
          name: 'content',
          children: (field) =>
            /* @__PURE__ */ jsxs('div', {
              className: 'space-y-2',
              children: [
                /* @__PURE__ */ jsx(Label, {
                  children: admin_posts_content_field(),
                }),
                /* @__PURE__ */ jsx(RichTextEditor, {
                  value: field.state.value,
                  onChange: (content) => field.handleChange(content),
                  placeholder: admin_posts_content_placeholder(),
                }),
              ],
            }),
        }),
      ],
    });
  }
  return /* @__PURE__ */ jsxs('div', {
    className: 'space-y-6 p-6',
    children: [
      /* @__PURE__ */ jsxs('div', {
        className: 'flex items-center justify-between',
        children: [
          /* @__PURE__ */ jsxs('div', {
            children: [
              /* @__PURE__ */ jsx('h1', {
                className: 'text-2xl font-bold',
                children: admin_posts_title(),
              }),
              /* @__PURE__ */ jsx('p', {
                className: 'text-muted-foreground',
                children: admin_posts_description(),
              }),
            ],
          }),
          /* @__PURE__ */ jsxs(Dialog, {
            open: createOpen,
            onOpenChange: setCreateOpen,
            children: [
              /* @__PURE__ */ jsxs(DialogTrigger, {
                className:
                  'bg-primary text-primary-foreground hover:bg-primary/80 inline-flex h-8 items-center justify-center gap-1.5 rounded-lg px-2.5 text-sm font-medium transition-colors',
                children: [
                  /* @__PURE__ */ jsx(Plus, { className: 'size-4' }),
                  admin_posts_create(),
                ],
              }),
              /* @__PURE__ */ jsxs(DialogContent, {
                className: 'max-h-[90vh] overflow-y-auto sm:max-w-3xl',
                children: [
                  /* @__PURE__ */ jsxs(DialogHeader, {
                    children: [
                      /* @__PURE__ */ jsx(DialogTitle, {
                        children: admin_posts_create_title(),
                      }),
                      /* @__PURE__ */ jsx(DialogDescription, {
                        children: admin_posts_create_description(),
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxs('form', {
                    onSubmit: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      createForm.handleSubmit();
                    },
                    children: [
                      renderFields(createForm),
                      /* @__PURE__ */ jsxs(DialogFooter, {
                        children: [
                          /* @__PURE__ */ jsx(Button, {
                            type: 'button',
                            variant: 'outline',
                            onClick: () => setCreateOpen(false),
                            children: admin_posts_cancel(),
                          }),
                          /* @__PURE__ */ jsx(Button, {
                            type: 'submit',
                            disabled: createMutation.isPending,
                            children: admin_posts_save(),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
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
              children: tDynamic(`admin.posts.tab_${tb}`),
            },
            tb
          )
        ),
      }),
      /* @__PURE__ */ jsx(Card, {
        children: /* @__PURE__ */ jsx(CardContent, {
          children: /* @__PURE__ */ jsx(DataTable, {
            columns,
            data: listQuery.data?.items ?? [],
            total: listQuery.data?.total ?? 0,
            page,
            pageSize: PAGE_SIZE,
            onPageChange: setPage,
            rowKey: (p) => p.id,
            emptyText: admin_posts_no_data(),
            search,
            onSearchChange: setSearch,
            onRefresh: () => listQuery.refetch(),
            loading: listQuery.isFetching,
          }),
        }),
      }),
      /* @__PURE__ */ jsx(Dialog, {
        open: !!editingPost,
        onOpenChange: (v) => !v && setEditingPost(null),
        children: /* @__PURE__ */ jsxs(DialogContent, {
          className: 'max-h-[90vh] overflow-y-auto sm:max-w-3xl',
          children: [
            /* @__PURE__ */ jsxs(DialogHeader, {
              children: [
                /* @__PURE__ */ jsx(DialogTitle, {
                  children: admin_posts_edit_title(),
                }),
                /* @__PURE__ */ jsx(DialogDescription, {
                  children: admin_posts_edit_description(),
                }),
              ],
            }),
            /* @__PURE__ */ jsxs('form', {
              onSubmit: (e) => {
                e.preventDefault();
                e.stopPropagation();
                editForm.handleSubmit();
              },
              children: [
                renderFields(editForm),
                /* @__PURE__ */ jsxs(DialogFooter, {
                  children: [
                    /* @__PURE__ */ jsx(Button, {
                      type: 'button',
                      variant: 'outline',
                      onClick: () => setEditingPost(null),
                      children: admin_posts_cancel(),
                    }),
                    /* @__PURE__ */ jsx(Button, {
                      type: 'submit',
                      disabled: editMutation.isPending,
                      children: admin_posts_save(),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx(Dialog, {
        open: !!deletingPost,
        onOpenChange: (v) => !v && setDeletingPost(null),
        children: /* @__PURE__ */ jsxs(DialogContent, {
          children: [
            /* @__PURE__ */ jsxs(DialogHeader, {
              children: [
                /* @__PURE__ */ jsx(DialogTitle, {
                  children: admin_posts_delete_title(),
                }),
                /* @__PURE__ */ jsx(DialogDescription, {
                  children: admin_posts_delete_confirm(),
                }),
              ],
            }),
            /* @__PURE__ */ jsxs(DialogFooter, {
              children: [
                /* @__PURE__ */ jsx(Button, {
                  variant: 'outline',
                  onClick: () => setDeletingPost(null),
                  children: admin_posts_cancel(),
                }),
                /* @__PURE__ */ jsx(Button, {
                  variant: 'destructive',
                  disabled: deleteMutation.isPending,
                  onClick: () =>
                    deletingPost && deleteMutation.mutate(deletingPost.id),
                  children: admin_posts_confirm_delete(),
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
export { PostsPage as component };
