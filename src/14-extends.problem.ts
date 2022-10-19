import { Equal, Expect } from "./helpers/type-utils";

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */

// interface SharedInterface {
//   id: string;
//   firstName: string;
//   lastName: string;
//   title: string;
//   body: string;
//   comment: string;
// }

// type User = Omit<SharedInterface, "title" | "body" | "comment">
// type Post = Omit<SharedInterface, "firstName" | "lastName" | "comment">
// type Comment = Omit<SharedInterface, "title" | "body" | "firstName" | "lastName">

interface SharedProperty {
  id: string
}

interface User extends SharedProperty {
  firstName: string;
  lastName: string;
}
interface Post extends SharedProperty {
  title: string;
  body: string;
}

interface Comment extends SharedProperty {
  comment: string;
}

type tests = [
  Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
  Expect<Equal<Post, { id: string; title: string; body: string }>>,
  Expect<Equal<Comment, { id: string; comment: string }>>,
];
