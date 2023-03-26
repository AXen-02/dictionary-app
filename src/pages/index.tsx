import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetStaticProps } from "next";
import axios from "axios";
import { ChangeEvent, useState, useEffect } from "react";
import { HiOutlinePlay } from "react-icons/hi2";
import ReactPlayer from "react-player";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  theme: string;
  dictapi_data: [];
}

interface DictProps {
  word: string;
  phonetic: string;
  phonetics: [
    {
      audio: string;
    }
  ];
  meanings: [
    {
      partOfSpeech: string;
      definitions: [
        {
          definition: string;
          synonyms: [];
          antonyms: [];
          example: string;
        }
      ];
      synonyms: [];
      antonyms: [];
    }
  ];
}

export default function Home({ theme, dictapi_data }: HomeProps) {
  const [searchTerm, setSearchTerm] = useState("rap");
  const [dictData, setDictData] = useState(dictapi_data);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const renderDictionaryData = (
    <>
      {dictData?.map(({ word, phonetic, phonetics, meanings }: DictProps) => {
        return (
          <div key={word + (Math.floor(Math.random() * 999999) + 1)}>
            <div className="grid grid-flow-col gap-28 w-full">
              <div className="grid items-end">
                <div className="items-center flex gap-4">
                  <label className="text-8xl font-bold">{word}</label>
                  {phonetics[0]?.audio && (
                    <>
                      <HiOutlinePlay
                        className="btn btn-ghost btn-circle btn-outline p-2 cursor-pointer"
                        onClick={() => setAudioPlaying(true)}
                      />
                      <ReactPlayer
                        url={phonetics[0].audio}
                        playing={audioPlaying}
                        height={0}
                        width={0}
                        onEnded={() => setAudioPlaying(false)}
                      />
                    </>
                  )}
                </div>
                <label className="text-xl font-semibold text-secondary">
                  {phonetic}
                </label>
              </div>
            </div>
            <div>
              {/* <pre id="json">{JSON.stringify(meanings, undefined, 2)}</pre>               */}
              {meanings.map((meaning) => {
                return (
                  <div
                    key={Math.floor(Math.random() * 999999) + 1}
                    className="grid grid-flow-row gap-y-3"
                  >
                    <label className="text-2xl font-bold mt-6">
                      {meaning.partOfSpeech}
                    </label>
                    <label className="text-primary-focus">Meaning </label>
                    {meaning.definitions.map((definition) => {
                      return (
                        <div
                          key={Math.floor(Math.random() * 999999) + 1}
                          className="grid grid-flow-row pl-6 -gap-y-4"
                        >
                          <label>• {definition.definition}</label>
                          {definition?.synonyms || (
                            <label>Synonyms: {definition.synonyms}</label>
                          )}
                          {definition?.antonyms || (
                            <label>Antonyms: {definition.antonyms}</label>
                          )}
                          {definition?.example && (
                            <label className="font-extralight italic text-primary-focus pl-2">
                              &quot;{definition.example}&quot;
                            </label>
                          )}
                        </div>
                      );
                    })}
                    <div className="space-x-6">
                      {meaning.synonyms.length === 0 ? null : (
                        <label className="text-primary-focus">Synonyms</label>
                      )}
                      {meaning.synonyms.map((synonym) => (
                        <label
                          key={
                            synonym + (Math.floor(Math.random() * 999999) + 1)
                          }
                          className="text-primary-focus font-bold"
                        >
                          {synonym}
                        </label>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }) || (
        <div className="flex flex-col">
          <label className="text-5xl font-bold">Word not found</label>
          <label className="text-lg font-semibold text-secondary">
            Sorry pal, we couldn&apos;t find definitions for the word you were
            looking for.
          </label>
        </div>
      )}
      {/* api json */}
      {/* <div className="mockup-code">
        <code>
          <pre>{JSON.stringify(dictData, undefined, 2)}</pre>
        </code>
      </div> */}
    </>
  );

  const handleSearch = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await searchDictApi(searchTerm);

    setDictData(data);
  };

  return (
    <>
      <Head>
        <title>Dictionary</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        <form onSubmit={handleSearch} className="m-6 space-y-4">
          <div className="space-x-4">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
              onChange={handleChange}
              value={searchTerm}
            />
            <button className="btn btn-success">Search</button>
          </div>
          {renderDictionaryData}
        </form>
      </main>
    </>
  );
}

const searchDictApi = async (searchTerm: string) => {
  const response = await axios
    .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
    .catch((e) => {
      return e;
    });

  return response.data;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const theme = "night";
  const dictapi_data: [] = [];

  return {
    props: {
      theme,
      dictapi_data,
    },
  };
};
