import { useCallback, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { useAddress } from "../hooks/wallet";

export default function view() {
  const [customAddress, setCustomAddress] = useState(null);

  const address = useAddress();

  return (
    <div className="bg-white">
      <SearchBar updateAddress={setCustomAddress} />
    </div>
  );
}