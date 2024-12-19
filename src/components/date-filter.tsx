"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DateFilter() {
  const [selectedValue, setSelectedValue] = React.useState("7 days");
  return (
    <Select value={selectedValue} onValueChange={setSelectedValue}>
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="7 days">7 days</SelectItem>
          <SelectItem value="14 days">14 days</SelectItem>
          <SelectItem value="21 days">21 days</SelectItem>
          <SelectItem value="1 month">1 month</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
