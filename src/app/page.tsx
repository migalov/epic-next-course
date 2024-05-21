import Image from "next/image";
import { Button } from "@/components/ui/button"

async function getStrapiData(path: string) {
  const baseUrl = 'http:/localhost:1337';
  try {
    const response = await fetch( baseUrl + path );
    const data = await response.json();
    return data
  }
  catch (error) {
    console.log(error);
    
  }
}

export default async function Home() {

  const strapiData = await getStrapiData("/api/home-page/");
  console.log(strapiData);
  const {title, description} = strapiData?.data?.attributes;
  

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <Button>Button</Button>
    </>
  )
}
