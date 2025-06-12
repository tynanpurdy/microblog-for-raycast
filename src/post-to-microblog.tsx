import { Form, ActionPanel, Action, showToast, Toast } from "@raycast/api";

type Values = {
  title: string;
  content: string;
  tokeneditor: string[];
};

export default function Command() {
  function handlePost(values: Values) {
    if (!values.content) {
      showToast({ title: "Error", message: "Content is required", style: Toast.Style.Failure });
      return;
    }

    console.log(values);
    showToast({ title: "Submitted form", message: "See logs for submitted values" });
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm onSubmit={handlePost} />
        </ActionPanel>
      }
    >
      <Form.Description text="Post to Microblog" />
      <Form.TextField id="title" title="Title" placeholder="Optional" />
      <Form.TextArea id="content" title="Content" placeholder="Craft your post" />
    </Form>
  );
}
