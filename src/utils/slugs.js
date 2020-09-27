import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDicectory = join(process.cwd(), "_posts");

class PostUtils {
  getPostSlugs() {
    return fs.readdirSync(postsDicectory);
  }

  getPostBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDicectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContents);

    return fields.reduce((items, field) => {
      if (field === "slug") {
        items[field] = realSlug;
      }

      if (field === "content") {
        items[field] = content;
      }

      if (data[field]) {
        items[field] = data[field];
      }

      return items;
    }, {});
  }

  getAllPosts(fileds = []) {
    const slugs = this.getPostSlugs();
    return slugs
      .map((slug) => this.getPostBySlug(slug, fileds))
      .sort((post1, post2) => (post1.data > post2.data ? "-1" : "1"));
  }
}

export default new PostUtils();
