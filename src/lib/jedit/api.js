import {supabase} from '../db';

export const fetchJeList = async () => {
	let {data,error} = await supabase.from('jedit_data').select('group,titel,info,link,id').order('group', {ascending: true}).order('id', {ascending: true})
	if (data) {
		return data;
	} else {
		throw new Error(error, data);
	}
};
export const fetchJeDetails = async (id) => {
	let {data,error} = await supabase.from('jedit_data').select('*').eq('id', id).single();
	if (data) {
		return data;
	} else {
		throw new Error(error, data);
	}
};
// group,titel,info,dataobj,link,hidden,id,schema,config,created_at



//  id, titel, info, group, created_at, link, refer, daten 
export const fetchSeList = async () => {
	let {data,error} = await supabase.from('jedit_Schema')
		.select('id,titel,info,group,created_at,link,refer,daten')
		.order('group', {ascending: true}).order('id', {ascending: true});
	if (data) {
		return data;
	} else {
		throw new Error(error);
	}
};