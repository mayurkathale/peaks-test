export const htmlToString = (str: string): string => {
  return str.replace(/<[^>]+>/g, "");
};

// export const convertDate = (dateIso: string | undefined): string => {
//   if (!dateIso)
//     return '';
//   let format = new Date(dateIso);
//   return format;
// }
