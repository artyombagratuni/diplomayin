export const columns = [
  {
    title: "Product",
    dataIndex: ["title", "imageUrl"],
    key: "title",
    render: (_, { title, imageUrl }) => (
      <div>
        <div>{title}</div>
        <img src={imageUrl} style={{ width: 100, height: 100 }} />
      </div>
    ),
  },
  {
    title: "Quantity",
    dataIndex: "Quantity",
    key: "Quantity",
  },
  {
    title: "Total",
    dataIndex: "Total",
    key: "Total",
  },
];

export const data = [
  {
    title: "Axmax Girq",
    id: 1,
    imageUrl:
      "https://static1.s123-cdn-static-a.com/uploads/2066265/800_5ca64085e88b2.png",
    price: 2000,
    isSelled: true,
    type: "books-for-days-crate",
  },
  {
    title: "Normal Girq",
    id: 2,
    imageUrl:
      "https://easydrawingguides.com/wp-content/uploads/2020/10/how-to-draw-an-open-book-featured-image-1200.png",
    price: 2500,
    isSelled: false,
    type: "books-for-days-crate",
  },
  {
    title: "Lav girq",
    id: 3,
    imageUrl:
      "https://www.publicbooks.org/wp-content/uploads/2017/01/book-e1484158615982.jpg",
    price: 3000,
    isSelled: true,
    type: "books-for-days-crate",
  },
];
