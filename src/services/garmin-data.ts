import supabase from "../utils/supabase";
import type { Activity } from "../utils/types";

export async function getActivities(): Promise<Activity[]> {
  const { data, error } = await supabase.from("GarminData").select("*");

  if (error) {
    console.error("Error fetching Garmin data:", error);
    return [];
  }

  return data as Activity[];
}
