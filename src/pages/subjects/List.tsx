import { CreateButton } from "@/components/refine-ui/buttons/create";
import { DataTable } from "@/components/refine-ui/data-table/data-table";
import { Breadcrumb } from "@/components/refine-ui/layout/breadcrumb";
import { ListView } from "@/components/refine-ui/views/list-view";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { DEPARTMENTS_OPTIONS } from "@/constants";
import { Subject } from "@/types/Subject";
import { useTable } from "@refinedev/react-table";
import { ColumnDef } from "@tanstack/react-table";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React, { useMemo } from "react";

const SubjectsList = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedDepartment, setSelectedDepartment] = React.useState("all");

  const departmentFilters =
    selectedDepartment !== "all"
      ? [
          {
            field: "department",
            operator: "eq" as const,
            value: selectedDepartment,
          },
        ]
      : [];

  const searchQueryFilter = searchQuery
    ? [
        {
          field: "name",
          operator: "contains" as const,
          value: searchQuery,
        },
      ]
    : [];
  const subjectTable = useTable<Subject>({
    columns: useMemo<ColumnDef<Subject>[]>(
      () => [
        {
          id: "code",
          accessorKey: "code",
          size: 150,
          header: () => <p className="column-title">Code</p>,
          cell: ({ getValue }) => <Badge>{getValue<string>()}</Badge>,
        },
        {
          id: "name",
          accessorKey: "name",
          size: 300,
          header: () => <p className="column-title">Subject Name</p>,
          cell: ({ getValue }) => (
            <span className="text-forground">{getValue<string>()}</span>
          ),
          filterFn: "includesString",
        },

        {
          id: "department",
          accessorKey: "department",
          size: 200,
          header: () => <p className="column-title">Department</p>,
          cell: ({ getValue }) => (
            <Badge variant="secondary">{getValue<string>()}</Badge>
          ),
        },

        {
          id: "description",
          accessorKey: "description",
          size: 300,
          header: () => <p className="column-title">Description</p>,
          cell: ({ getValue }) => (
            <span className="truncate line-clamp-2">{getValue<string>()}</span>
          ),
        },
      ],
      [],
    ),
    refineCoreProps: {
      resource: "subjects",
      pagination: { pageSize: 10, mode: "server" },
      filters: {
        permanent: [...departmentFilters, ...searchQueryFilter],
      },
      sorters: {
        initial: [{ field: "id", order: "desc" }],
      },
    },
  });
  return (
    <ListView className="list-view-container">
      <Breadcrumb />

      <h1 className="page-title">Subjects</h1>

      <div className="intro-row">
        {/* Left Side: Text */}
        <div className="intro-text-wrapper">
          <p className="intro-text">
            Quick access to your essential metrics and management tools.
          </p>
        </div>

        {/* Right Side: Search Box */}
        <div className="actions-row">
          <div className="search-field-wrapper">
            <Search className="search-icon" size={16} />
            <input
              type="text"
              placeholder="Search subjects..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <Select
              value={selectedDepartment}
              onValueChange={setSelectedDepartment}
            >
              <SelectTrigger className="select-trigger">
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {DEPARTMENTS_OPTIONS.map((dept) => (
                  <SelectItem key={dept.value} value={dept.value}>
                    {dept.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <CreateButton />
          </div>
        </div>
      </div>
      <DataTable table={subjectTable} />
    </ListView>
  );
};

export default SubjectsList;
