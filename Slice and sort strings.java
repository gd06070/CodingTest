import java.util.*;

class Solution {
    public String[] solution(String myString) {
        String[] ms2 = myString.split("x");
		ArrayList<String> al = new ArrayList<String>();
        
        for (String s: ms2) {
            if (!s.isEmpty()) al.add(s);
        }
        Collections.sort(al);

        return al.toArray(new String[0]);
    }
}
