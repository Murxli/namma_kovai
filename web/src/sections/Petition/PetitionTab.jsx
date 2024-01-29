"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PetitionCard from "./PetitionCard";
import { Circles } from "react-loader-spinner";

export const PetitionStatus = [
  "under review", "work in progress", "completed"
];

const PetitionTab = ({ data, isLoading, setFilter }) => {
  // console.log(data);
  return (
    <div className="w-full">
      <Tabs defaultValue={PetitionStatus[0]} className="w-full ">
        <TabsList className="grid w-full grid-cols-3 bg-teal-100">
          {PetitionStatus.map((item, index) => (
            <TabsTrigger value={item} key={index} onClick={() => setFilter(item)}>
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
        {isLoading ? (
          <Circles />
        ) : (
          PetitionStatus.map((item) => (
            <TabsContent value={item} key={item}>
              {data && data.length === 0 && (
                <p className="max-w-md mx-auto inline-block">
                  No petitons for now
                </p>
              )}
              {data &&
                data.map((item) => (
                  <PetitionCard key={item._id} petitiondetail={item} />
                ))}
              {!data && <p>Error Fetching data</p>}
            </TabsContent>
          ))
        )}
      </Tabs>
    </div>
  );
};

export default PetitionTab;
