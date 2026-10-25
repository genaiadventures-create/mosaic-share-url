// Share-page ids are MongoDB ObjectIds. Anything else is not put into a
// mosaic:// link, so a crafted URL cannot steer the app to another route.
const OBJECT_ID = /^[a-f0-9]{24}$/;

export function isValidShareId(id: unknown): id is string {
  return typeof id === "string" && OBJECT_ID.test(id);
}

export function storyDeepLink(id: unknown): string | null {
  return isValidShareId(id) ? `mosaic://story/detail/${id}` : null;
}

export function videoDeepLink(id: unknown): string | null {
  return isValidShareId(id) ? `mosaic://video/${id}` : null;
}
