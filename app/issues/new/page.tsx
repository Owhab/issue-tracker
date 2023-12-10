"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssue = () => {
  return (
    <div className="max-w-xl space-y-3">
      <h1 className="text-center text-3xl">New Issue</h1>
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <SimpleMDE placeholder="Description..." />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssue;
