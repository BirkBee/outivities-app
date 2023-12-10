import { useRouter } from "next/router";
import OutivityForm from "@/components/OutivityForm";
import { useEffect, useState } from "react";
import Head from "next/head";
import opencage from "opencage-api-client";

export default function UpdateOutivityDetails({ outivities, onEditOutivity }) {
  const router = useRouter();
  const { id } = router.query;
  const [selectedImage, setSelectedImage] = useState("");
  const [outivity, setOutivity] = useState(null);
  const [outivityArea, setOutivityArea] = useState("");

  useEffect(() => {
    const currentOutivity = outivities.find((outivity) => outivity.id === id);
    if (currentOutivity) {
      setOutivity(currentOutivity);
      setSelectedImage(currentOutivity.image);
      setOutivityArea(currentOutivity.area);
    }
  }, [id, outivities]);

  async function fetchData(query) {
    if (!query) {
      return null;
    }
    try {
      const data = await opencage.geocode({
        q: query,
        key: process.env.NEXT_PUBLIC_OPENCAGE_API_KEY,
      });
      console.log("data: ", data);
      return data;
    } catch (error) {
      console.error("Error fetching geolocation data:", error);
      return null;
    }
  }

  if (!outivity) return <h2>Sorry. Outivity not found.</h2>;

  async function handleEditOutivity(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newOutivityData = Object.fromEntries(formData);

    try {
      const geolocationData = await fetchData(newOutivityData.outivityArea);
      const updatedOutivity = prepareFormData(newOutivityData, geolocationData);

      onEditOutivity(updatedOutivity, id);
      router.push(`/${id}`);
    } catch (error) {
      console.error("Error fetching geolocation data:", error);
    }
  }

  function prepareFormData(data, geolocationData) {
    const updatedOutivity = {
      id: id,
      title: data.outivityName,
      area: data.outivityArea,
      country: data.outivityCountry,
      image: selectedImage || image.secure_url,
      description: data.outivityDescription,
      lat: geolocationData.results[0].geometry.lat,
      long: geolocationData.results[0].geometry.lng,
    };

    console.log("updatedOutivity: ", updatedOutivity);
    return updatedOutivity;
  }

  return (
    <>
      <Head>
        <title>Edit Outivity</title>
      </Head>

      <OutivityForm
        outivity={outivity}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        onEditOutivity={handleEditOutivity}
        isEdit={true}
        outivityArea={outivityArea}
        setOutivityArea={setOutivityArea}
      />
    </>
  );
}
