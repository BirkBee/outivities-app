import { useRouter } from "next/router";
import OutivityForm from "@/components/OutivityForm";
import { useEffect, useState } from "react";
import Head from "next/head";
import opencage from "opencage-api-client";
import useSWR, { mutate } from "swr";

export default function UpdateOutivityDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedImage, setSelectedImage] = useState("");
  const [outivityArea, setOutivityArea] = useState("");
  const { data: outivity, isLoading } = useSWR(
    id ? `/api/outivities/${id}` : null
  );

  useEffect(() => {
    if (outivity) {
      setSelectedImage(outivity.image);
      setOutivityArea(outivity.area);
    }
  }, [outivity]);

  async function fetchData(query) {
    if (!query) {
      return null;
    }
    try {
      const data = await opencage.geocode({
        q: query,
        key: process.env.NEXT_PUBLIC_OPENCAGE_API_KEY,
      });
      return data;
    } catch (error) {
      console.error("Error fetching geolocation data:", error);
      return null;
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
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

  async function handleEditOutivity(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newOutivity = Object.fromEntries(formData);
    const updatedOutivity = {
      id: id,
      title: newOutivity.outivityName,
      area: newOutivity.outivityArea,
      country: newOutivity.outivityCountry,
      image: selectedImage || image.secure_url,
      description: newOutivity.outivityDescription,
      lat: geolocationData.results[0].geometry.lat,
      lng: geolocationData.results[0].geometry.lng,
    };

    const response = await fetch(`/api/outivities/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedNewOutivityData),
    });

    if (response.ok) {
      router.push(`/${id}`);
    }
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
