export interface Blogs {
    _path:       string;
    _dir:        string;
    _draft:      boolean;
    _partial:    boolean;
    _locale:     string;
    title:       string;
    description: string;
    body:        Body;
    _type:       string;
    _id:         string;
    _source:     string;
    _file:       string;
    _extension:  string;
}

export interface Body {
    type:     string;
    children: BodyChild[];
    toc:      Toc;
}

export interface BodyChild {
    type:     string;
    tag:      string;
    props:    Props;
    children: ChildChild[];
}

export interface ChildChild {
    type:  string;
    value: string;
}

export interface Props {
    id?: string;
}

export interface Toc {
    title:       string;
    searchDepth: number;
    depth:       number;
    links:       Link[];
}

export interface Link {
    id:    string;
    depth: number;
    text:  string;
}
