"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssue = () => {
  return (
    <div className="max-w-xl space-y-3">
      <h1 className="text-center text-3xl">New Issue</h1>
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <TextArea placeholder="Description..." />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssue;
