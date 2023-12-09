import OutivityForm from "@/components/OutivityForm";
import { useRouter } from "next/router";
import { useState } from "react";
import { uid } from "uid";
import useSWR from "swr";
import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function CreateOutivity({ onAddOutivity, outivities }) {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [newArea, setNewArea] = useState("");

  const newAreaURL = `https://nominatim.openstreetmap.org/search?format=json&limit=3&q=${newArea}`;
  const { data: currentCoordinates } = useSWR(newAreaURL);

  if (!outivities) {
    return <h2>is Loading...</h2>;
  }

  async function createOutivity(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
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
        lat: outivities.lat,
        long: outivities.long,
      };

      setSelectedImage(image);
      onAddOutivity(newOutivity);
      router.push("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  function handleNewArea(area) {
    setNewArea(area);
  }

  return (
    <>
      <Head>
        <title>New Outivity</title>
      </Head>

      <Map outivities={outivities} currentCoordinates={currentCoordinates} />

      {errorMessage && <p>{errorMessage}</p>}
      <OutivityForm
        createOutivity={createOutivity}
        isEdit={false}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        currentCoordinates={currentCoordinates}
        newArea={newArea}
        onNewArea={handleNewArea}
      />
    </>
  );
}
