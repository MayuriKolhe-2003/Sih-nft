import { useCallback, useEffect, useState } from "react";
import { getNfts, getIpfsMetadata, getEnsNameFromAddress } from "../utils/api";
import { truncateAddress } from "../utils/utils";
import Link from "next/link";
import { LockClosedIcon } from "@heroicons/react/solid";

export default function CertificatesList({ address }) {
  const [certificates, setCertificates] = useState([]);

  // Define a dummy certificates array
  const dummyCertificates = [
    {
      block_number: 1,
      metadata: {
        name: "Blockchain Course",
        image: "/cert.jpg",
        encryption: false,
        openBadge: {
          badge: {
            issuer: {
              id: "0xCCb807F89269E7d563F83a2a6Cd0383CB8Df406E",
            },
          },
        },
      },
    },
    {
      block_number: 1,
      metadata: {
        name: "Azadi ka Amrut Mohatsav",
        image: "https://img.freepik.com/free-vector/gradient-golden-luxury-certificate_52683-70557.jpg",
        encryption: false,
        openBadge: {
          badge: {
            issuer: {
              id: "0xCCb807F89269E7d56367687878f406E",
            },
          },
        },
      },
    },
    
  ];

  const fetchCertificates = useCallback(async () => {
    if (!address) return;

    setCertificates([]);

    const { result } = await getNfts(address);

    if (!result) return;

    const list = await Promise.all(
      result.map(async (nft) => {
        try {
          const data = await getIpfsMetadata(nft.token_uri);
          const metadata = data ? data : {};

          const ensName =
            metadata.openBadge && !metadata.encryption
              ? await getEnsNameFromAddress(metadata.openBadge.badge.issuer.id)
              : null;

          return {
            ...nft,
            metadata,
            ensName,
          };
        } catch (e) {
          console.log({ e });
        }
      })
    );

    setCertificates(
      list.filter((certificate) => certificate.metadata.openBadge)
    );
  }, [address]);

  useEffect(() => {
    fetchCertificates();
  }, [fetchCertificates]);

  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {dummyCertificates.map((certificate) => (
        <li key={certificate.block_number} className="relative overflow-hidden">
          <Link
            href={`/certificates/1234`}
          >
            <a>
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-green-500 overflow-hidden">
                {!certificate.metadata.encryption ? (
                  <img
                    src={certificate.metadata.image}
                    alt=""
                    className="object-cover pointer-events-none group-hover:opacity-75"
                  />
                ) : (
                  <LockClosedIcon
                    className="text-gray-400"
                    aria-hidden="true"
                  />
                )}
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">
                    View details for {certificate.metadata.name}
                  </span>
                </button>
              </div>
              {!certificate.metadata.encryption ? (
                <div>
                  <p className="mt-2 block text-xl font-medium text-gray-900 truncate pointer-events-none">
                    {certificate.metadata.name}
                  </p>
                  <div className="mt-2 block text-sm font-medium text-gray-400 pointer-events-none">
                    <span className="bg-slate-100 text-slate-400 rounded-full p-0.5 inline-flex items-center ">
                      <img
                        className="inline-block h-5 w-5 rounded-full"
                        src={`https://avatar.tobi.sh/${certificate.metadata.openBadge.badge.issuer.id}.svg`}
                        alt="0xCCb807F89269E7d563F83a2a6Cd0383CB8Df406E"
                      />
                      <span className="pl-1 pr-2 text-sm font-medium">
                        {certificate.ensName?.name
                          ? certificate.ensName.name
                          : truncateAddress(
                              certificate.metadata.openBadge.badge.issuer.id
                            )}
                      </span>
                    </span>
                  </div>
                </div>
              ) : (
                <p className="mt-1 block text-sm font-medium text-gray-400 pointer-events-none">
                  Encrypted
                </p>
              )}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
