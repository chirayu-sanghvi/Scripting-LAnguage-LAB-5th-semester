<!--
1. The function ChangeString(str) needs to modify the string passed using the following rules:
    ● Replace every letter in the string with the letter that follows it in alphabetical order (ie. Z becomes a,
        l becomes m).
    ● Take every vowel in this new string (a, e, i, o, u) and Capitalize it.
    ● Return this modified string.
    E.g: Input: "hello*3" Output: Ifmmp*3 
-->



<!DOCTYPE html>
<head>
    <title>My Document</title>
</head>
<body>

    <script>
        function convertString(word)
        {
            nwrd=""
            for(var i=0;i<word.length;i++)
            {
                if(word.charAt(i)>='a' && word.charAt(i)<='z')
                {
                    if(word.charAt(i)!='z')
                    {
                        nwrd=nwrd+String.fromCharCode(word.charCodeAt(i) + 1 )
                    }
                    else
                    {
                        nwrd=nwrd+'a'
                    }
                }
                else
                {
                    nwrd=nwrd+word.charAt(i)
                }
            }
            for(var i=0;i<word.length;i++)
            {
                if(nwrd.charAt(i)=='a'||nwrd.charAt(i)=='e'||nwrd.charAt(i)=='i'||nwrd.charAt(i)=='o'||nwrd.charAt(i)=='u')
                {
                    nwrd=nwrd.slice(0,i)+  (nwrd.slice(i,i+1)).toUpperCase() + nwrd.slice(i+1)
                }
            }
            return nwrd
        }
        var str=prompt("Enter the String")
        alert(convertString(str))
    </script>

</body>
</html>
