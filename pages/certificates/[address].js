import { ShieldCheckIcon, ShieldExclamationIcon } from "@heroicons/react/solid";
import { useCallback, useEffect, useState } from "react";
import {getNft, getIpfsMetadata, getEnsNameFromAddress} from "../../utils/api";
import { truncateAddress, timeConverter } from "../../utils/utils";
import { LockClosedIcon } from "@heroicons/react/solid";
import { decrypt, getPublicKey } from "../../utils/encryption";
import { ethers } from "ethers";
import abi from "../../abi.json";

function Certificate() {
  /*
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState(null);
  const [rawEncryptedData, setRawEncryptedData] = useState(null);
  const [verification, setVerification] = useState(null);

  const [ensName, setEnsName] = useState();
  const getCertificate = useCallback(async () => {
    if (!address || !id) return;
    const nft = await getNft(address, id);
    const data = await getIpfsMetadata(nft.token_uri);
    const metadata = data ? data : {};
    setCertificate({
      ...nft,
      metadata,
    });

    const name = await getEnsNameFromAddress(data?.openBadge.badge.issuer.id)
    if(!name.name){
      return
    }
    setEnsName(name.name)
  }, [address, id]);

  const decryptCertificate = (publicKey) => {
    if (!certificate?.metadata?.encryption || !publicKey) return;

    const encryptedMetadata = certificate.metadata;
    setRawEncryptedData(encryptedMetadata);
    const decryptedMetadata = {
      name: decrypt(encryptedMetadata["name"], publicKey),
      description: decrypt(encryptedMetadata["description"], publicKey),
      image: decrypt(encryptedMetadata["image"], publicKey),
      openBadge: {
        "@context": decrypt(
          encryptedMetadata["openBadge"]["@context"],
          publicKey
        ),
        type: decrypt(encryptedMetadata["openBadge"]["type"], publicKey),
        recipient: {
          type: decrypt(
            encryptedMetadata["openBadge"]["recipient"]["type"],
            publicKey
          ),
          identity: decrypt(
            encryptedMetadata["openBadge"]["recipient"]["identity"],
            publicKey
          ),
        },
        issuedOn: decrypt(
          encryptedMetadata["openBadge"]["issuedOn"],
          publicKey
        ),
        verification: {
          type: decrypt(
            encryptedMetadata["openBadge"]["verification"]["type"],
            publicKey
          ),
          creator: decrypt(
            encryptedMetadata["openBadge"]["verification"]["creator"],
            publicKey
          ),
        },
        badge: {
          type: decrypt(
            encryptedMetadata["openBadge"]["badge"]["type"],
            publicKey
          ),
          id: decrypt(encryptedMetadata["openBadge"]["badge"]["id"], publicKey),
          issuer: {
            id: decrypt(
              encryptedMetadata["openBadge"]["badge"]["issuer"]["id"],
              publicKey
            ),
            type: decrypt(
              encryptedMetadata["openBadge"]["badge"]["issuer"]["type"],
              publicKey
            ),
          },
        },
        evidence: {
          id: decrypt(
            encryptedMetadata["openBadge"]["evidence"]["id"],
            publicKey
          ),
          description: decrypt(
            encryptedMetadata["openBadge"]["evidence"]["description"],
            publicKey
          ),
        },
      },
      encryption: false,
    };
    setCertificate({
      ...certificate,
      metadata: decryptedMetadata,
    });
  };

  useEffect(() => {
    getCertificate();
  }, [getCertificate]);

  if (!certificate) return null;

  const handleDecryption = async () => {
    const publicKey = await getPublicKey();
    try {
      decryptCertificate(publicKey);
    } catch (_e) {
      setError("Invalid Public Key");
    }
  };

  const hashData = (dataObject) => {
    // We should only stringify once, the issue is caused by the double stringification in the create page
    const stringified = JSON.stringify(JSON.stringify(dataObject));
    return ethers.utils.id(stringified);
  };

  const verifyHash = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const signer = await provider.getSigner();

    const NFTCerts = new ethers.Contract(
      certificate.token_address,
      abi.abi,
      signer
    );
    const hash = await NFTCerts.getTokenMetadataHash(certificate.token_id);
    setVerification(hash === hashData(rawEncryptedData || certificate.metadata));
  };

  if (certificate?.metadata?.encryption)
    return (
      <div className="w-full h-[80vh] flex flex-col items-center justify-center">
        <div className="flex flex-col space-y-5">
          <div className="flex justify-center">
            <LockClosedIcon className="text-gray-400 w-64" aria-hidden="true" />
          </div>
          <div>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              This certificate is encrypted use your public key to decrypt it
            </p>
          </div>
          <div className="text-center">
            <button
              onClick={handleDecryption}
              type="submit"
              disabled={!!error}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-60 disabled:bg-gray-400 disabled:text-gray-700"
            >
              Decrypt
            </button>
            {error && (
              <p className="mt-1 max-w-2xl text-sm text-red-500">{error}</p>
            )}
          </div>
        </div>
      </div>
    );
    */

  return (
    <div className=" min-h-screen flex flex-col lg:flex-row w-full ">
      <div className="bg-slate-100 lg:w-1/2 flex justify-center items-center lg:h-screen lg:sticky lg:top-0">
        <div className="bg-white max-w-lg shadow-2xl shadow-slate-900/5 rounded-xl mx-4 lg:mx-8 my-16 scale-75">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDKJbeQCIp4erEQcPRVBdBX5Bt5CPNbg7Cgg&usqp=CAU" className="w-100 rounded-xl" />
        </div>
      </div>
      <div className=" flex-1 flex justify-center lg:items-center  ">
        <div className="max-w-lg w-full mx-4 lg:mx-8 my-6 lg:my-16">
          <div className="bg-slate-100 text-slate-400 rounded-full p-0.5 inline-flex">
            <img className="h-5 w-5" src="/logo.png"/>
            <span className="pl-1 pr-2 text-sm font-semibold">NFTInscribe</span>
          </div>
          <h1 className="text-2xl font-bold leading-7 text-slate-900 sm:text-3xl mt-4">
            Certificate name
          </h1>
          <p className="text-slate-500 mt-2">
            description
          </p>
          <div className="mt-5 border-t border-slate-200">
            <dl className="sm:divide-y sm:divide-slate-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-slate-500">
                  Awarded to
                </dt>
                <dd className="mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-2 flex  flex-col items-start gap-2">
                  <div className="bg-slate-100 text-slate-400 rounded-full p-0.5 inline-flex items-center ">
                    <img
                      className="inline-block h-5 w-5 rounded-full"
                      src="https://i.pinimg.com/736x/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg"
                      alt="0x8DAf30dEa39Fb89c5E039065B7d1973863b38352"
                    />
                    <span className="pl-1 pr-2 text-sm font-medium">
                      Mr.Ayush 
                    </span>
                  </div>
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-slate-500">
                  Issued by
                </dt>
                <dd className="mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-2 flex  flex-col items-start gap-2">
                  <div className="bg-slate-100 text-slate-400 rounded-full p-0.5 inline-flex items-center ">
                    <img
                      className="inline-block h-5 w-5 rounded-full"
                      src="https://www.gujarattourism.com/content/dam/gujrattourism/images/homepagephoto/gtlogo.jpg"
                      alt="0xCCb807F89269E7d563F83a2a6Cd0383CB8Df406E"
                    />
                    <span className="pl-1 pr-2 text-sm font-medium">
                      Government of Gujrat
                    </span>
                  </div>
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-slate-500">
                  Hash verification
                </dt>
                
                <dd className="mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-2">
                  {true ? (
                    <div className="flex space-x-2">
                      {true? (
                        <>
                          <ShieldCheckIcon
                            className="h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />{" "}
                          <span>Verified</span>
                        </>
                      ) : (
                        <>
                          <ShieldExclamationIcon
                            className="h-5 w-5 text-red-400"
                            aria-hidden="true"
                          />{" "}
                          <span>Invalid hash</span>
                        </>
                      )}
                    </div>
                  ) : (
                    <div>
                      <button
                        type="submit"
                        // onClick={verifyHash}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-60 disabled:bg-gray-400 disabled:text-gray-700"
                      >
                        Check
                      </button>
                    </div>
                  )}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-slate-500">Date</dt>
                <dd className="mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-2">
                  2023-12-2
                </dd>
              </div>

              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-slate-500">Comment</dt>
                <dd className="mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-2">
                  
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-slate-500">Links</dt>
                <dd className="mt-1 text-sm text-slate-900 sm:mt-0 sm:col-span-2">
                  <ul
                    role="list"
                    className="border border-slate-200 rounded-md divide-y divide-slate-200"
                  >
                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-slate-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                          />
                        </svg>
                        <span className="ml-2 flex-1 w-0 truncate">
                          
                        </span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href=""
                          className="font-medium text-nftcerts-primary hover:text-green-500"
                        >
                          Open
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function getStaticProps({ params }) {
//   const rawAddress = params.address;

//   const [address, id] = rawAddress.split("--");

//   return {
//     props: {
//       address,
//       id,
//     },
//   };
// }
// export async function getStaticPaths() {
//   return { paths: [], fallback: true };
// }

export default Certificate;
