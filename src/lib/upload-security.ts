const MAX_UPLOAD_SIZE_BYTES = 5 * 1024 * 1024;
const ALLOWED_CONTENT_TYPES = ["image/png", "image/jpeg", "image/webp", "application/pdf"] as const;

export function validateUploadPayload(
  contentType: string | null,
  contentLength: string | null,
) {
  if (!contentType?.includes("multipart/form-data")) {
    return {
      allowed: false,
      reason: "unsupported-content-type",
    };
  }

  if (contentLength && Number(contentLength) > MAX_UPLOAD_SIZE_BYTES) {
    return {
      allowed: false,
      reason: "file-too-large",
    };
  }

  return {
    allowed: true,
    reason: "validated",
  };
}

export function getUploadPolicy() {
  return {
    maxSizeBytes: MAX_UPLOAD_SIZE_BYTES,
    allowedContentTypes: [...ALLOWED_CONTENT_TYPES],
  };
}
