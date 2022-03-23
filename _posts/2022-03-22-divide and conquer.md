## 분할 정복 알고리즘 <br/>(Divide-and-Conquer)
> 주어진 문제의 입력을 분할하여 문제를 해결하는 방식의 알고리즘이다. 분할된 입력에 동일한 알고리즘으로 해를 계산하고, 구한 해를 취합하여 원래 문제의 해를 구한다.

* 부분문제(subproblem): 분할된 입력에 대한 문제 
* 부분해: 부분문제의 해

             
분할 정복 알고리즘의 대표적인 예시들을 소개한다.
*합병 정렬, 퀵 정렬, 선택 문제(정렬), 최근접 점의 쌍 찾기*
<br/>
<br/>

*합병정렬(Merge Sort)
- 입력이 2개의 부분문제로 분할되고 부분문제의 크기가 1/2로 감소하는 분할 정복 알고리즘
- n개의 숫자들을 n/2개씩 2개의 부분 문제로 분할하고, 각각의 부분문제를 순환적으로 합병 정렬한 후, 2개의 정렬된 부분을 합병하여 정렬한다.
- 시간복잡도는 *O(nlogn)*, 공간복잡도는 *O(n)*

**합병 정렬 알고리즘(분할 정복 기반)**
	
    MergeSort(A, p, q)
	Input: A[p] ~A[q]
	Output: Sorted A[p]~A[q]
	
	if(p < q) {
	  k = [(p+q)/2]
	  MergeSort(A, p, k)
	  MergeSort(A, k+1, q)
	  A[p] ~ A[k]와 A[k+1]~A[q]를 합병한다.
	}

<br/>

![image](https://blog.kakaocdn.net/dn/I4Eea/btqwWoPUJTM/7PgoOu3VrplmeIhcR0vnNK/img.png)
*fig) 병합 정렬*

<br/>

**퀵 정렬(Quick Sort)** <br/>
- 피봇(pivot)이라 일컫는 배열의 원소를 기준으로 피봇보다 작은 숫자들을 왼쪽으로, 피봇보다 큰 숫자들은 오른편에 위치하도록 분할하고 피봇을 그 사이에 놓는다.
- 퀵 정렬은 분할된 부분문제들에 대하여 동일한 과정을 순환적으로 수행하여 정렬한다.
- 평균의 시간복잡도는 *O(nlogn)*, 최악 경우의 시간복잡도는 *O(n<sup>2</sup>)*, 최선 경우의 시간복잡도는 *O(nlogn)*

**퀵 정렬 알고리즘**
	
    QuickSort(A, left, right)
	Input: String A[left]~A[right]
	Output: Sorted String A[left]~A[right]
	
	if(left < right) {
	  pivot을 String A[left]~A[right] 중에서 선택. 
	  pivot을 A[left]와 자리를 바꾸고, pivot과 string의 각 원소를 비교하여 작은 숫자	  는 A[left]~A[p-1] 위치에, 큰 숫자들은 A[p+1]~A[right]으로 옮긴다.
	  최종적으로 pivot은 A[p]에 둔다.
	  QuickSort(A, left, p-1)
	  QuickSort(A, p+1, right)
	}
<br/>

![image](https://blog.kakaocdn.net/dn/bvk8dw/btqwVhxq7vQ/F6wCsUPw77h1fGBej78S8k/img.png)
<br/>

**선택 문제 (Selection)**
- k번째 작은 수를 찾는 문제로서, 입력에서 퀵 정렬에서와 같이 피봇을 선택하여 피봇보다 작은 부분과 큰 부분으로 분할한 후에 k번째 작은 수가 들어있는 부분을 순환적으로 탐색한다.
- 평균 경우의 시간복잡도는 *O(n)*

**선택 문제 알고리즘**
	
    Selection(A, left, right, k)
	Input: A[left]~A[right]와 k, 단, 1≤k≤|A|, |A|=right-left+1
	Output: A[left]~A[right]에서 k번째 작은 요소
	pivot을 A[left]~A[right]에서 랜덤하게 선택한다.
	pivot과 A[left]의 자리를 바꾸고, pivot과 배열의 각 원소를 비교한다.
	pivot보다 작으면 A[left]~A[p-1]로, 크면 A[p+1]~A[right] 위치로 옮긴다.
	최종적으로 pivot은 A[p]에 둔다.
	S = (p-1)-left+1
	if(k ≤ S)
	  Selection(A, left, p-1, k)
	else if
	  return A[p]
	else
	  Selection(A, p+1 right, k-S-1)

<br/> <br/>


**최근접 점의 쌍 찾기**
- n개의 점들을 1/2로 분할하여 각각의 부분문제에서 최근접 점의 쌍을 찾고, 2개의 부분해 중에서 짧은 거리를 가진 점의 쌍을 먼저 찾는다.
- 그리고 2개의 부분해를 취합할 때, 반드시 중간 영역 안에 있는 점들 중에 최근접 점의 쌍이 있는지도 확인해봐야 한다.
- 향상된 알고리즘의 시간복잡도는 *O(nlogn)*


**최근접 점의 쌍을 찾는 알고리즘**
	
    ClosestPair(S)
	Input: x-좌표의 오름차순으로 정렬된 배열 S에는 I개의 점[단, 각 점은 (x, y)로 표시)]이 주어진다.
	Output: S에 있는 점들 중 최근접 점의 쌍의 거리

	if(i ≤ 3)
	  return (2 or 3개의 점들 사이의 최근접 쌍)
	
정렬된 S를 같은 크기의 S를 같은 크기의 S<sub>L</sub>과 S<sub>R</sub>로 분할한다. 단, |S|가 홀수면, |S<sub>L</sub>| = |S<sub>R</sub>|+1 이 되도록 분할한다. <br/>
*CP<sub>L</sub> = ClosetPair(S<sub>L</sub>)* <br/>
*CP<sub>R</sub> = ClosetPair(S<sub>R</sub>)* <br/><br/>

*d = min{dist(CP<sub>L</sub>), dist(CP<sub>R</sub>)}* 일 때, 중간 영역에 속하는 점들 중에서 최근접 점의 	쌍을 찾아서 이를 *CP<sub>C</sub>* 라고 하자. 
단, *dist()*는 두 점 사이의 거리이다. <br/>
return *(CP<sub>L</sub>, CP<sub>C</sub>, CP<sub>R</sub>* 중에서 거리가 가장 짧은 쌍)

<br/>

## 출처
* [Merge Sort](https://blog.kakaocdn.net/dn/I4Eea/btqwWoPUJTM/7PgoOu3VrplmeIhcR0vnNK/img.png)
* [Quick Sort](https://blog.kakaocdn.net/dn/bvk8dw/btqwVhxq7vQ/F6wCsUPw77h1fGBej78S8k/img.png)
* 양성봉 著, **알기쉬운 알고리즘**
<br/>

___ 
<br/>

**알기 쉬운 알고리즘** 교재 내에 *분할 정복 알고리즘* 파트 중 퀵 정렬 알고리즘의 예시를 하나 살펴보고자 한다.
<br/>

### Quick Sort Algorithm 구현 (Java)
> #### Q) 다음의 숫자가 주어졌을 때 퀵정렬을 이용하여 오름차순으로 정렬하라.
> #### 6, 9, 21, 81, 95, 73, 29, 20, 15, 4, 30, 1, 90, 718, 385, 407, 913

<br/>

```java
public class QuickSort {
    private static void quickSort(int[] arr,int start, int end) {
        int part=partition(arr,start,end);
        if(start<part-1) quickSort(arr,start,part-1);
        if(end>part) quickSort(arr,part,end);
    }

    private static int partition(int[] arr,int start,int end) {
        int pivot=arr[(start+end)/2];
        while(start<=end) {
            while(arr[start]<pivot) start++;
            while(arr[end]>pivot) end--;
            if(start<=end) {
                swap(arr,start,end);
                start++;
                end--;
            }
        }
        return start;
    }

    private static void swap(int[] arr,int start,int end) {
        int tmp=arr[start];
        arr[start]=arr[end];
        arr[end]=tmp;
        return;
    }


    public static void main(String[] args) {
        int[] arr= {6, 9, 21, 81, 95, 73, 29, 20, 15, 4, 30, 1, 90, 718, 385, 407, 913};
        quickSort(arr,0,arr.length-1);
        for(int i=0;i<arr.length;i++) {
            System.out.print(arr[i]+" ");
        }
    }
}
```
<br/>


## 위 Algorithm의 Output
- ![Output](https://drive.google.com/file/d/1Ohz7T7bXrESW2hDQ6JPwckKqQfbcTLTP/view?usp=sharing)
<br/>

## 출처
* ![Youtube](https://www.youtube.com/watch?v=7BDzle2n47c)
* 양성봉 著, **알기쉬운 알고리즘**
<br/>
