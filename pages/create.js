import OutivityForm from "@/components/OutivityForm";
import { useRouter } from "next/router";
import { useState } from "react";
import { uid } from "uid";
import Head from "next/head";
import opencage from "opencage-api-client";

export default function CreateOutivity({ onAddOutivity }) {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [outivityArea, setOutivityArea] = useState("");

  async function fetchData(query) {
    if (!query) {
      return null;
    }
    const data = await opencage.geocode({
      q: query,
      key: process.env.NEXT_PUBLIC_OPENCAGE_API_KEY,
    });
    return data;
  }

  async function createOutivity(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      const geolocationData = await fetchData(data.outivityArea);

      if (!geolocationData) {
        throw new Error("Geolocation data is not available.");
      }

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error uploading new Outivity. Please try again.");
      }

      const image = await response.json();
      const newOutivity = {
        id: uid(),
        title: data.outivityName,
        area: data.outivityArea,
        country: data.outivityCountry,
        image: image.secure_url,
        description: data.outivityDescription,
        lat: geolocationData.results[0].geometry.lat,
        long: geolocationData.results[0].geometry.lng,
      };

      setSelectedImage(image);
      onAddOutivity(newOutivity);
      router.push("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <>
      <Head>
        <title>New Outivity</title>
      </Head>

      {errorMessage && <p>{errorMessage}</p>}
      <OutivityForm
        createOutivity={createOutivity}
        isEdit={false}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        outivityArea={outivityArea}
        setOutivityArea={setOutivityArea}
      />
    </>
  );
}
