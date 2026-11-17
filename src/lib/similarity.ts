export function cosineSimilarity(
 a:Record<string,number>,
 b:Record<string,number>
){

 let dot = 0;

 let normA = 0;

 let normB = 0;

 Object.keys(a).forEach((key)=>{

  dot +=
   (a[key]||0)
   *
   (b[key]||0);

  normA +=
   Math.pow(
    a[key]||0,
    2
   );

  normB +=
   Math.pow(
    b[key]||0,
    2
   );

 });

 return (

  dot /

  (
   Math.sqrt(normA)

   *

   Math.sqrt(normB)
  )

 );

}
