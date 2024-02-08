interface Rect {
    x: number; 
    y: number;
    w: number;
    h: number;
  }
  
  interface Point {
    x: number; 
    y: number;
  }
  
  interface ImageObject {
    type: unknown;
    point: Point
    comment?: string;
  }
  
  interface ArrowImageObject extends ImageObject {
    type: "arrow"; 
    direction?: "lb" | "lt" | "rb" | "rt";
  }
  
  interface ImageProps {
    src: string
    crop: Rect;
    objects: ImageObject[];
  }
