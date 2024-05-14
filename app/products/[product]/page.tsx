export default function Page({ params }: { params: { product: string } }) {

  

  return (
  <div className="px-4 md:px-12 lg:px-32 py-12">
    My Post: {params.product}
  </div>
);
}
