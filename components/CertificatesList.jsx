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
        name: "Azadi ka Amrut Mohatsav",
        image: "data:image/png;base64,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",
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
      block_number: 2,
      metadata: {
        name: "Certificate 2",
        image: "https://example.com/certificate2.jpg",
        encryption: true,
      },
    },
    {
      block_number: 3,
      metadata: {
        name: "Certificate 3",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxkf5fMxTU4iB3_CFuf9aD6YvaHo2gKVvhvg&usqp=CAU",
        encryption: false,
        openBadge: {
          badge: {
            issuer: {
              id: "0x1234567890abcdef",
            },
          },
        },
      },
    },
    {
      block_number: 4,
      metadata: {
        name: "Certificate 4",
        image: "https://example.com/certificate4.jpg",
        encryption: true,
      },
    },
    {
      block_number: 5,
      metadata: {
        name: "Best Debator",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDKJbeQCIp4erEQcPRVBdBX5Bt5CPNbg7Cgg&usqp=CAU",
        encryption: false,
        openBadge: {
          badge: {
            issuer: {
              id: "0x9876543210fedcba",
            },
          },
        },
      },
    },
    {
      block_number: 6,
      metadata: {
        name: "Certificate 6",
        image: "https://example.com/certificate6.jpg",
        encryption: true,
      },
    },
    {
      block_number: 7,
      metadata: {
        name: "Certificate 7",
        image: "https://w7.pngwing.com/pngs/297/679/png-transparent-academic-certificate-template-diploma-illustration-certificate-border-certificate-illustration-border-frame-text.png",
        encryption: false,
        openBadge: {
          badge: {
            issuer: {
              id: "0xabcdef1234567890",
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
