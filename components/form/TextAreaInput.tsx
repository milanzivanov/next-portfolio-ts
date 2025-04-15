import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

function TextAreaInput({ name, labelText, defaultValue }: TextAreaInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize mb-2">
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue || tempDefaultDescription}
        rows={5}
        required
        className="leading-loose"
      />
    </div>
  );
}

const tempDefaultDescription =
  "This web application is a modern, full-stack project built using Next.js, offering a fast, scalable, and SEO-friendly frontend. It leverages TypeScript for type safety and robust code structure, ensuring maintainability and developer confidence throughout the project. Styling is handled using Tailwind CSS, enabling a responsive, utility-first design system that promotes rapid UI development and consistency. On the backend, the application integrates Prisma ORM to manage and interact with a PostgreSQL database, allowing type-safe queries and efficient data modeling. User authentication and file storage are managed through Supabase, providing seamless, serverless functionality for handling real-time data and secure user sessions. For form validation and schema enforcement, Zod is utilized — ensuring data integrity both on the client and server with a declarative approach to input validation.";
export default TextAreaInput;
