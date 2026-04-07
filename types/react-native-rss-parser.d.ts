declare module 'react-native-rss-parser' {
  export interface RssItem {
    id: string;
    title: string;
    content: string;
    description: string;
    published: string;
    created: string;
    updated: string;
    enclosures: Array<{
      url: string;
      length: string;
      mimeType: string;
    }>;
    links: Array<{
      url: string;
      rel: string;
    }>;
    authors: Array<{
      name: string;
    }>;
    categories: Array<{
      name: string;
    }>;
  }

  export interface RssFeed {
    title: string;
    links: Array<{
      url: string;
      rel: string;
    }>;
    description: string;
    image: {
      url: string;
      title: string;
      description: string;
      width: string;
      height: string;
    };
    lastUpdated: string;
    lastPublished: string;
    authors: Array<{
      name: string;
    }>;
    items: RssItem[];
  }

  export function parse(xmlText: string): Promise<RssFeed>;
}
