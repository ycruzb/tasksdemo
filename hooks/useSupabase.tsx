import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ITask {
	id: number,
	content: string
}

export const addTask = async (content: string) => {
	const { error, data } = await supabase.from<ITask>("tasks").insert([{ content }]);
	return { error, task: data ? data[0] : [] };
};

export const getTasks = async () => {
	const { error, data } = await supabase.from<ITask>("tasks").select().order('id', { ascending: false });
	return { error, tasks: data };
};
