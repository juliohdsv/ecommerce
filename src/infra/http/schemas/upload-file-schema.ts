import z from "zod";

export const fileSchema = z.object({
  filename: z
    .string()
    .min(1, "Filename is required.")
    .endsWith(".csv", "Filename must have a .csv extension."),

  mimetype: z.literal("text/csv", {
    error: "Only CSV files are allowed.",
  }),
});

export const fileSchemaResponseSuccess = z.object({
  message: z.string(),
  data: z.object({
    filename: z.string(),
    mimetype: z.string(),
  }),
  timestamp: z.string(),
});

export const fileSchemaResponseError = z.object({
  error: z.object({
    message: z.string(),
  }),
  timestamp: z.string(),
});
