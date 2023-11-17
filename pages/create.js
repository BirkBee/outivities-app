import useLocalStorageState from "use-local-storage-state";

export default function NewOutivity() {
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: initialEntries,
  });

  function handleAddEntry(newEntry) {
    setEntries([...entries, { id: uid(), ...newEntry }]);
  }
  console.log(entries);

  return;
}
