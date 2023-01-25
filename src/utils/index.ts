export const htmlToString = (str: string | undefined): string => {
  return str ? str.replace(/<[^>]+>/g, "") : '';
};

// export const convertDate = (dateIso: string | undefined): string => {
//   if (!dateIso)
//     return '';
//   let format = new Date(dateIso);
//   return format;
// }
