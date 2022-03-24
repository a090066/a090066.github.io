# Divide and Conquer / 분할 정복 알고리즘

#### 앞의 글에서는 컴퓨터알고리즘 강의에서 사용하는 교재 *양성봉 著. 알기 쉬운 알고리즘* 를 중심으로 **분할 정복 알고리즘(Divide-and-Conquer Algorithm)** 의 기본 개념 및 알고리즘에 알아보았고 퀵 정렬 알고리즘에 대해 짧게나마 정리해보았다. 이번 포스트에서는 분할 정복 알고리즘 중 **합병 정렬(Merge Sort)** 에 대해 더욱 자세히 정리하고 관련된 문제도 다뤄볼 것이다.
<br/>

**목차**는 다음과 같다.

* 퀵 정렬
   * ① 정리
   * ② 퀵 정렬 알고리즘 예시
   * ③ 퀵 정렬 알고리즘이 적용된 문제
<br/>

___

<br/>

**알기 쉬운 알고리즘** 교재 내에 *분할 정복 알고리즘* 파트 중 퀵 정렬 알고리즘의 예시를 하나 살펴보고자 한다.
<br/>

## ① 정리
## 퀵 정렬(Quick Sort)?
> 피봇(Pivot) 선택에 따라 알고리즘의 복잡도가 좌지우지되는 알고리즘으로, 피봇을 기준으로 작은 숫자는 왼쪽으로 큰 숫자는 오른쪽으로 이동해가며 정렬이 이루어진다.
- 피봇 선택은 자유이나, 통상적으로 가장 왼쪽 index나 중간에 위치한 index를 많이 택한다.
- 작은 크기보다 큰 크기의 input일 때 더 좋은 성능을 보인다.



<br/>

## ② 퀵 정렬 알고리즘 예시

## Question
### Quick Sort Algorithm 구현 (Java)
> #### 다음의 숫자가 주어졌을 때 퀵정렬을 이용하여 오름차순으로 정렬하라.
> #### **6, 95, 73, 20, 15, 30, 1, 90, 718, 407**

<br/>

```java
public class QuickSort {
    private static void quickSort(int[] arr,int start, int end) {
        int part=partition(arr, start, end);
        if(start<part-1) quickSort(arr,start,part-1);
        if(end>part) quickSort(arr, part, end);
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
        int temp;
		temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        return;
    }


    public static void main(String[] args) {
        int[] arr= {6, 95, 73, 20, 15, 30, 1, 90, 718, 407};
        quickSort(arr,0,arr.length-1);
        for(int i=0;i<arr.length;i++) {
            System.out.print(arr[i]+" ");
        }
    }
}
```
<br/>


## 위 Algorithm의 Output
> ![Output](https://postfiles.pstatic.net/MjAyMjAzMjNfMTkg/MDAxNjQ4MDI2ODAyNjQy.lAEZVUG4VQFyT-Qmsqx84BMu71IHMKL1Jvm1CNlVO-0g.ofaE9M4GuYgkz6q-2vSHT6bTEMIdtSfpqC_cl-qnHe8g.PNG.a090066/%ED%80%B5_%EB%B0%B0%EC%97%B4_%EC%B6%9C%EB%A0%A5%EA%B0%92.PNG?type=w773)

> 1 6 15 20 30 73 90 95 407 718 

<br/>


<br/>


## 퀵 정렬 과정
> 1. pivot을 정한다. (여기선 6으로 정해보자. arr[0]=6 is pivot)
> 2. pivot을 기준으로 pivot+1(오른쪽으로 1씩 이동), right-1(왼쪽으로 1씩 이동)하면서 크기 비교를 해가며 위치 이동을 한다.
> 3. 1차 정렬이 끝났으면, pivot을 재설정 한 뒤, 퀵 정렬을 다시 진행한다.
> 4. 이 과정을 반복하고 출력값을 확인한다.
> 5. **1 6 15 20 30 73 90 95 407 718** 

> ※ 이해를 돕는 GIF 파일을 첨부한다.
![](https://github.com/GimunLee/tech-refrigerator/raw/master/Algorithm/resources/quick-sort-001.gif)

<br/>


## ③ 퀵 정렬 알고리즘이 적용된 문제
![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnsKLT%2FbtqNpHAtcBx%2F0KKbPnt5IWefbnwI2EPM91%2Fimg.png)

<br/>

> **BaekJoon OnlineJudge** <br/> *No. 2751: 수 정렬하기 2* 
### **Question)** N개의 수가 주어졌을 때, 이를 *오름차순*으로 정렬하는 프로그램을 작성하시오. 
<br/>

#### 문제에서 어떠한 정렬을 사용해야 하는지 조건을 제시해주지 않았기에, **퀵 정렬**을 사용하여 해당 문제를 해결해보자.
<br/>

```java
import java.util.Scanner;

public class 2751_QuickSort {
	public static int partition(int[] array, int left, int right) {
	    int mid = (left + right) / 2; // 원소의 중앙값을 첫 번째 원소와 교환하기 위함
	    swap(array, left, mid); // 중앙 값을 첫 번째 요소로 이동
	 
	    int pivot = array[left]; // 첫 번째 인덱스가 pivot이 된다.
        int i = left, j = right;
	 
	    while (i < j) { // left < right 즉, 교차하기 전 까지 반복한다.
	        while (pivot < array[j]) { // j는 오른쪽에서 왼쪽으로 피봇보다 작거나 같은 값을 찾는다.
	            j--;
	        }
	 
	        while (i < j && pivot >= array[i]) { // i는 왼쪽에서 오른쪽으로 피봇보다 큰 값을 찾는다.
	            i++;
	        }
	        swap(array, i, j); // 찾은 i와 j를 교환
	    }
	    // 반복문을 벗어난 경우는 i와 j가 만난경우
	    // 피봇과 교환
	    array[left] = array[i]; // 어차피 i와 j가 만나기 때문에 i 또는 j를 사용하면 된다.
	    array[i] = pivot; // array[left]값을 담아 둔 pivot을 구분점의 요소에 저장
	    
	    return i; // 구분점이 되는 인덱스를 반환한다.
	}
	 
	public static void swap(int[] array, int a, int b) {
	    int temp = array[b];
	    array[b] = array[a];
	    array[a] = temp;
	}
	 
	public static void quicksort(int[] array, int left, int right) { 
	    if (left >= right) 
	        return;
	    }
	 
	    int p = partition(array, left, right); // 위의 메소드를 통해서 구한 구분점을 저장
	    quicksort(array, left, p - 1); // left부터 구분점 전까지 다시 한 번 재귀호출
	    quicksort(array, p + 1, right); // 구분점 다음부터 right까지 다시 한 번 재귀호출
	}


	
	public static void main(String[] args) {
		 Scanner sc = new Scanner(System.in);
		 
		 int n = sc.nextInt();
		 int arr[] = new int[n];
		 
		 for(int i = 0; i < n; i++) {
			 arr[i] = sc.nextInt();
		 }
		 quicksort(arr, 0, n-1);
	       
		 for(int i = 0; i < n; i++) {
			 System.out.println(arr[i]); 
		 }
	}
}
```
<br/>

___
## Reference
* [Youtube - 퀵정렬에 대해 알아보고 자바로 구현하기](https://www.youtube.com/watch?v=7BDzle2n47c)
* 양성봉 著, **알기쉬운 알고리즘**
* [Quick Sort - Image & Notion](https://gyoogle.dev/blog/algorithm/Quick%20Sort.html)
<br/>