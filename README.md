#Hello React🚀

#parcel
-Dev Build
-Local Server
-HMR (Hot Module Replacement)
-File Watching Algorithm - written in c++
-Caching - Faster Builds
-Image Optimization
-Minification
-Bundling
-Compress
-Consistet Hashing
-Code Splitting
-Differential Bundling -support older browsers
-Diagnostic
-Error Handling
-HTTPs
-Tree Shaking - remove unused code

#Project layout planning
/\*
\*Header
-logo
-Nav Items

- Body
  -Search
  -Restaurant Container
  -Restaurant Card
  -- Img
  -- Name of Res, Star Rating, cuisine, delivery time, etc
  _Footer
  -Copyright
  -Links
  -Address
  -Contact
  _/

NOTE - whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

//if no dependency array => useEffect is called on every render
//if dependency array is empty = [] => useEffect is called on initial render(just once)
// if dependency array is state value => called everytime state value updated
