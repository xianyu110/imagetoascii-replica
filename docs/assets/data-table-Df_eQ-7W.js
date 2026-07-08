import { useMemo, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ChevronLeft, ChevronRight, RefreshCw, Search } from 'lucide-react';

import { t as Button } from './button-RkClB0x2.js';
import { t as Input } from './input-B6v4Jp25.js';
import {
  Mc as common_search_placeholder,
  Oc as common_table_next,
  jc as common_table_no_data,
  kc as common_table_previous,
  Dc as common_table_refresh,
  Ac as common_table_total,
} from './messages-DC2BhyRd.js';
import { t as cn } from './utils-C_uf36nf.js';

//#region src/components/ui/table.tsx
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsx('div', {
    'data-slot': 'table-container',
    className: 'relative w-full overflow-x-auto',
    children: /* @__PURE__ */ jsx('table', {
      'data-slot': 'table',
      className: cn('w-full caption-bottom text-sm', className),
      ...props,
    }),
  });
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx('thead', {
    'data-slot': 'table-header',
    className: cn('[&_tr]:border-b', className),
    ...props,
  });
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsx('tbody', {
    'data-slot': 'table-body',
    className: cn('[&_tr:last-child]:border-0', className),
    ...props,
  });
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsx('tr', {
    'data-slot': 'table-row',
    className: cn(
      'border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted',
      className
    ),
    ...props,
  });
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsx('th', {
    'data-slot': 'table-head',
    className: cn(
      'h-12 px-4 text-left align-middle font-medium whitespace-nowrap text-muted-foreground [&:has([role=checkbox])]:pr-0',
      className
    ),
    ...props,
  });
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsx('td', {
    'data-slot': 'table-cell',
    className: cn(
      'px-4 py-3 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0',
      className
    ),
    ...props,
  });
}
//#endregion
//#region src/components/data-table.tsx
function DataTable({
  columns,
  data,
  total,
  page,
  pageSize,
  onPageChange,
  search,
  onSearchChange,
  searchPlaceholder,
  toolbar,
  emptyText,
  rowKey,
  onRefresh,
  loading,
}) {
  const [refreshing, setRefreshing] = useState(false);
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const table = useReactTable({
    data,
    columns: useMemo(
      () =>
        columns.map((col, i) => ({
          id: String(i),
          header: () => col.header,
          cell: ({ row }) => col.cell(row.original),
          meta: { className: col.className },
        })),
      [columns]
    ),
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    rowCount: total,
    getRowId: (row) => rowKey(row),
  });
  async function handleRefresh() {
    if (!onRefresh || refreshing) return;
    setRefreshing(true);
    try {
      await onRefresh();
    } finally {
      setRefreshing(false);
    }
  }
  const showHeader = onSearchChange || toolbar || onRefresh;
  const busy = refreshing || loading;
  return /* @__PURE__ */ jsxs('div', {
    className: 'space-y-4',
    children: [
      showHeader &&
        /* @__PURE__ */ jsxs('div', {
          className: 'flex items-center gap-2',
          children: [
            onSearchChange &&
              /* @__PURE__ */ jsxs('div', {
                className: 'relative max-w-sm',
                children: [
                  /* @__PURE__ */ jsx(Search, {
                    className:
                      'text-muted-foreground absolute top-2.5 left-2.5 size-4',
                  }),
                  /* @__PURE__ */ jsx(Input, {
                    value: search || '',
                    onChange: (e) => onSearchChange(e.target.value),
                    placeholder:
                      searchPlaceholder || common_search_placeholder(),
                    className: 'h-9 pl-8',
                  }),
                ],
              }),
            toolbar,
            onRefresh &&
              /* @__PURE__ */ jsx(Button, {
                variant: 'outline',
                size: 'icon',
                className: 'ml-auto size-9',
                onClick: handleRefresh,
                disabled: busy,
                'aria-label': common_table_refresh(),
                children: /* @__PURE__ */ jsx(RefreshCw, {
                  className: cn('size-4', busy && 'animate-spin'),
                }),
              }),
          ],
        }),
      /* @__PURE__ */ jsx('div', {
        className: 'overflow-x-auto',
        children: /* @__PURE__ */ jsxs(Table, {
          children: [
            /* @__PURE__ */ jsx(TableHeader, {
              children: table.getHeaderGroups().map((headerGroup) =>
                /* @__PURE__ */ jsx(
                  TableRow,
                  {
                    children: headerGroup.headers.map((header) =>
                      /* @__PURE__ */ jsx(
                        TableHead,
                        {
                          className: header.column.columnDef.meta?.className,
                          children: flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          ),
                        },
                        header.id
                      )
                    ),
                  },
                  headerGroup.id
                )
              ),
            }),
            /* @__PURE__ */ jsx(TableBody, {
              children:
                table.getRowModel().rows.length === 0
                  ? /* @__PURE__ */ jsx(TableRow, {
                      children: /* @__PURE__ */ jsx(TableCell, {
                        colSpan: columns.length,
                        className: 'text-muted-foreground py-8 text-center',
                        children: emptyText || common_table_no_data(),
                      }),
                    })
                  : table.getRowModel().rows.map((row) =>
                      /* @__PURE__ */ jsx(
                        TableRow,
                        {
                          children: row.getVisibleCells().map((cell) =>
                            /* @__PURE__ */ jsx(
                              TableCell,
                              {
                                className:
                                  cell.column.columnDef.meta?.className,
                                children: flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                ),
                              },
                              cell.id
                            )
                          ),
                        },
                        row.id
                      )
                    ),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsxs('div', {
        className: 'flex items-center justify-between px-2',
        children: [
          /* @__PURE__ */ jsx('p', {
            className: 'text-muted-foreground text-sm',
            children: common_table_total({ count: total }),
          }),
          total > pageSize &&
            /* @__PURE__ */ jsxs('div', {
              className: 'flex items-center gap-2',
              children: [
                /* @__PURE__ */ jsxs(Button, {
                  variant: 'outline',
                  size: 'sm',
                  onClick: () => onPageChange(page - 1),
                  disabled: page <= 1,
                  children: [
                    /* @__PURE__ */ jsx(ChevronLeft, { className: 'size-4' }),
                    common_table_previous(),
                  ],
                }),
                /* @__PURE__ */ jsxs(Button, {
                  variant: 'outline',
                  size: 'sm',
                  onClick: () => onPageChange(page + 1),
                  disabled: page >= totalPages,
                  children: [
                    common_table_next(),
                    /* @__PURE__ */ jsx(ChevronRight, { className: 'size-4' }),
                  ],
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
//#endregion
export { DataTable as t };
