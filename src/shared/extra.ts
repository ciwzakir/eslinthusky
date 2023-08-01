// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   // console.log('first')
//   // Promise.reject(new Error('An unhandle error'))
//   // res.send('Hello World!')
//   throw new Error('Error Occued')
//   //   throw new ApiError(400, 'Error !!!')
//   // next("Express Next Function")
// })
// global Error Handleer
// const searchAndCodition = [
//   {
//     $or: [
//       {
//         title: {
//           $regex: searchTerm,
//           $options: 'i',
//         },
//       },
//       {
//         code: {
//           $regex: searchTerm,
//           $options: 'i',
//         },
//       },
//       // {
//       //   year: {
//       //     $regex: searchTerm,
//       //     $options: 'i',
//       //   },
//       // },
//     ],
//   },
// ];
