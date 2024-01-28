"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PetitionCard from "./PetitionCard";

export const PetitionTypes = [
  { dept: "Highway", types: ["Pathole", "Traffic Light", "Others"] },
];



const PetitionTab = () => {

  return (
    <div className="w-full">
      <Tabs defaultValue={PetitionTypes[0].types[0]} className="w-full ">
        <TabsList className="grid w-full grid-cols-3 bg-teal-100">
          {PetitionTypes[0].types.map((item, index) => (
            <TabsTrigger value={item} key={index}>{item}</TabsTrigger>
          ))}
        </TabsList>
        {PetitionTypes[0].types.map((item) => (
          <TabsContent value={item} key={item}>
           {[1,2,3,4].map(item => <PetitionCard key={item} />)}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default PetitionTab;
