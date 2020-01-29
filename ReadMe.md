Generics
1) like function argument but for types in claass function definitions
2) allows us to define the type of property argument return value at a future point
3) used heavily when writing reusable code


Composition Pattern 
1) class Summary contains properties of a) analyzer, b) outputtarget, buildandprintreport(matchdata[])
2) two interfaces exist a) interface analyzer with property run(matches:matchdata[]:string) b) interface outputtarget print(report:string):void
3) four classes exist under outputtarget and analyzer
a) class averageGoalsanalysis with property run(matchdata[]:string)
b) class wins analysis with property run(matchdata[]:string)
c) class consolereport with property print(report:string):void
d) class htmlreport with property print(report:string):void