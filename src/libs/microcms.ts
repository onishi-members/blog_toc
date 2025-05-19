//SDK利用準備
import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";
const client = createClient({
	serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
	apiKey: import.meta.env.MICROCMS_API_KEY,
});

// ブログ記事の型定義
type Blogs = {
	title: string;
	content: string;
};

// ブログ記事取得用関数
export const getBlogs = async (queries?: MicroCMSQueries) => {
 	return await client.getList<Blogs>({ endpoint: "blogs", queries }); // APIのエンドポイントとしてBlogsを指定
};