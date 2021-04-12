export interface Issue {
    _id: string;
    title: string;
    responsebile: string;
    description: string;
    severity: string;
    status: string;
}

export interface Uploads {
    chunkSize: 261120;
    contentType: 'image/jpeg';
    filename: string;
    length: Int16Array;
    md5: Int16Array;
    uploadDate: Int16Array;
}

export interface BloggerPosts {
    id;
    name: string;
    items: string;
    title: string;
    author: string;
    content: string;
    published: string;
    image: string;
    url: string;

}
