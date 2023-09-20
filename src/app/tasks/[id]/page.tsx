type PageParams = {
    id:string
}
type PageProps = {
    params: PageParams
}
export default function Page({params}:PageProps) {
  return (
    <div>Page: {params.id}</div>
  )
}