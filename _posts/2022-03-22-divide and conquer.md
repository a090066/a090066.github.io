## 분할 정복 알고리즘 <br/>(Divide-and-Conquer)
> 주어진 문제의 입력을 분할하여 문제를 해결하는 방식의 알고리즘이다. 분할된 입력에 동일한 알고리즘으로 해를 계산하고, 구한 해를 취합하여 원래 문제의 해를 구한다.

* 부분문제(subproblem): 분할된 입력에 대한 문제 
* 부분해: 부분문제의 해

             
분할 정복 알고리즘의 대표적인 예시들을 소개한다.
*합병 정렬, 퀵 정렬, 선택 문제(정렬), 최근접 점의 쌍 찾기*
<br/>
<br/>

### 합병정렬(Merge Sort)
- 입력이 2개의 부분문제로 분할되고 부분문제의 크기가 1/2로 감소하는 분할 정복 알고리즘
- n개의 숫자들을 n/2개씩 2개의 부분 문제로 분할하고, 각각의 부분문제를 순환적으로 합병 정렬한 후, 2개의 정렬된 부분을 합병하여 정렬한다.
- 시간복잡도는 *O(nlogn)*, 공간복잡도는 *O(n)*

**합병 정렬 알고리즘(분할 정복 기반)**
	
```java
    MergeSort(A, p, q)
	Input: A[p] ~A[q]
	Output: Sorted A[p]~A[q]
	
	if(p < q) {
	  k = [(p+q)/2]
	  MergeSort(A, p, k)
	  MergeSort(A, k+1, q)
	  A[p] ~ A[k]와 A[k+1]~A[q]를 합병한다.
	}
```
<br/>

![image](https://blog.kakaocdn.net/dn/I4Eea/btqwWoPUJTM/7PgoOu3VrplmeIhcR0vnNK/img.png)
<br/>
*fig) 병합 정렬*

<br/>

### 퀵 정렬(Quick Sort) <br/>
- 피봇(pivot)이라 일컫는 배열의 원소를 기준으로 피봇보다 작은 숫자들을 왼쪽으로, 피봇보다 큰 숫자들은 오른편에 위치하도록 분할하고 피봇을 그 사이에 놓는다.
- 퀵 정렬은 분할된 부분문제들에 대하여 동일한 과정을 순환적으로 수행하여 정렬한다.
- 평균의 시간복잡도는 *O(nlogn)*, 최악 경우의 시간복잡도는 *O(n<sup>2</sup>)*, 최선 경우의 시간복잡도는 *O(nlogn)*

**퀵 정렬 알고리즘**
```java
    QuickSort(A, left, right)
	Input: String A[left]~A[right]
	Output: Sorted String A[left]~A[right]
	
	if(left < right) {
	  pivot을 String A[left]~A[right] 중에서 선택한다.
	  pivot을 A[left]와 자리를 바꾸고, pivot과 string의 각 원소를 비교하여 작은 숫자는 A[left]~A[p-1] 위치에, 큰 숫자들은 A[p+1]~A[right]으로 옮긴다.
	  최종적으로 pivot은 A[p]에 둔다.
	  QuickSort(A, left, p-1)
	  QuickSort(A, p+1, right)
	}
```

<br/>

![image](https://blog.kakaocdn.net/dn/bvk8dw/btqwVhxq7vQ/F6wCsUPw77h1fGBej78S8k/img.png)
<br/> *fig)퀵 정렬*

<br/>

### 선택 문제 (Selection)
- k번째 작은 수를 찾는 문제로서, 입력에서 퀵 정렬에서와 같이 피봇을 선택하여 피봇보다 작은 부분과 큰 부분으로 분할한 후에 k번째 작은 수가 들어있는 부분을 순환적으로 탐색한다.
- 평균 경우의 시간복잡도는 *O(n)*

**선택 문제 알고리즘**
```java	
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
```
<br/> <br/>


### 최근접 점의 쌍 찾기
- n개의 점들을 1/2로 분할하여 각각의 부분문제에서 최근접 점의 쌍을 찾고, 2개의 부분해 중에서 짧은 거리를 가진 점의 쌍을 먼저 찾는다.
- 그리고 2개의 부분해를 취합할 때, 반드시 중간 영역 안에 있는 점들 중에 최근접 점의 쌍이 있는지도 확인해봐야 한다.
- 향상된 알고리즘의 시간복잡도는 *O(nlogn)*


**최근접 점의 쌍을 찾는 알고리즘**
```java
    ClosestPair(S)
	Input: x-좌표의 오름차순으로 정렬된 배열 S에는 I개의 점[단, 각 점은 (x, y)로 표시)]이 주어진다.
	Output: S에 있는 점들 중 최근접 점의 쌍의 거리

	if(i ≤ 3)
	  return (2 or 3개의 점들 사이의 최근접 쌍)
```	
정렬된 S를 같은 크기의 S를 같은 크기의 S<sub>L</sub>과 S<sub>R</sub>로 분할한다. 단, |S|가 홀수면, |S<sub>L</sub>| = |S<sub>R</sub>|+1 이 되도록 분할한다. <br/>
*CP<sub>L</sub> = ClosetPair(S<sub>L</sub>)* <br/>
*CP<sub>R</sub> = ClosetPair(S<sub>R</sub>)* <br/><br/>

*d = min{dist(CP<sub>L</sub>), dist(CP<sub>R</sub>)}* 일 때, 중간 영역에 속하는 점들 중에서 최근접 점의 	쌍을 찾아서 이를 *CP<sub>C</sub>* 라고 하자. 
단, *dist()*는 두 점 사이의 거리이다. <br/>
return *(CP<sub>L</sub>, CP<sub>C</sub>, CP<sub>R</sub>* 중에서 거리가 가장 짧은 쌍)

<br/>

## Reference
* [Merge Sort](https://blog.kakaocdn.net/dn/I4Eea/btqwWoPUJTM/7PgoOu3VrplmeIhcR0vnNK/img.png)
* [Quick Sort](https://blog.kakaocdn.net/dn/bvk8dw/btqwVhxq7vQ/F6wCsUPw77h1fGBej78S8k/img.png)
* 양성봉 著, **알기쉬운 알고리즘** 中 *3. 분할정복 알고리즘*
<br/>

___
## 합병 정렬(Merge Sort)
> 배열(or 리스트)을 같은 크기로 **두 개로 분할**하여 정렬하고, 정렬된 배열을 **다시 합하여** 원하는 방식으로 정렬하는 방법을 합병 정렬이라고 한다. 
<br/>

![merge sort image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FchaNcD%2FbtqAErQityf%2FjkHkMSgm8whkpr0VbuO6N1%2Fimg.gif)
<br/>

## ① 정리
- 먼저 입력받은 정렬되지 않은 배열을 확인한다.
- 정렬되지 않은 배열을 두 개로 나눌 수 있을 때 까지 나눈다. (부분 배열 생성됨)
- 나눈 배열들끼리 크기 비교를 하여 결합하는 과정을 통해 최종적인 합병 정렬이 이루어진다.

<br/>

### 이제 임의의 수가 입력된 배열로 그 예시를 들어보자.

### ex) **9 2 7 1 3 6 8 5** 
<br/> 

#### 입력받은 수를 합병 정렬을 거쳐서 **오름차순**으로 정렬해보자. 
<br/>


1) **분할 과정(Divide)** 을 거친다.
<br/>
9 2 7 1 / 3 6 8 5
<br/>
9 2 / 7 1 / 3 6 / 8 5
<br/>
9 / 2 / 7 / 1 / 3 / 6 / 8 / 5   

2) **부분 배열을 정렬하고 (Conquer), 결합한다.**
<br/>
2 9 / 1 7 / 3 6 / 5 8
<br/>
1 2 7 9 / 3 5 6 8
<br/>
1 2 3 5 6 7 8 9
<br/>

3) **정렬이 잘 되었는지 Output값을 확인한다.**
<br/>
*Unsorted Array*<br/> 9 2 7 1 3 6 8 5
<br/>
*Sorted Array* <br/>
1 2 3 5 6 7 8 9

<br/>

**합병 정렬에 대한 이해를 확실하게 하기 위해 추가 사진을 첨부한다.**  
<br/>

![image](https://gmlwjd9405.github.io/images/algorithm-merge-sort/merge-sort-concepts.png)
*fig1) 이해를 돕기위한 합병정렬 구조*

<br/>

![image](https://gmlwjd9405.github.io/images/algorithm-merge-sort/merge-sort.png)
*fig2) 이해를 돕기위한 합병정렬 알고리즘 도식화*

<br/>


## 수업 中 분할 정복 알고리즘 - 합병 정렬이 이루어진 경우

## ② 합병 정렬 알고리즘이 적용된 문제 <br/>
![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnsKLT%2FbtqNpHAtcBx%2F0KKbPnt5IWefbnwI2EPM91%2Fimg.png)

![image](./백준_2751.png)

<br/>

> **BaekJoon OnlineJudge** <br/> *No. 2751: 수 정렬하기 2* 
### **Question)** N개의 수가 주어졌을 때, 이를 *오름차순*으로 정렬하는 프로그램을 작성하시오. 
<br/>

#### 문제에서 어떠한 정렬을 사용해야 하는지 조건을 제시해주지 않았기에, **합병정렬**을 사용하여 해당 문제를 해결해보자.
<br/>

> C <br/>

```c
#include <stdio.h>

void merge(int a[], int low, int mid, int hight) { 
    int b[1000000]; 
    int i = low; 
    int j = mid + 1; 
    int k = 0; 
    
    while(i <= mid && j <= hight) {
         if(a[i] <= a[j]) 
            b[k++] = a[i++]; 
            
        else 
            b[k++] = a[j++]; 
        } 
            
        while(i <= mid) 
            b[k++] = a[i++]; 

        while(j <= hight) 
            b[k++] = a[j++]; 
        k--; 
        
        while(k >= 0) { 
            a[low + k] = b[k]; 
            k--; 
            } 
    } 
        
    void mergeSort(int a[], int low, int hight) {
            int mid; 
            
            if(low < hight) { 
                mid = (low + hight) / 2; 
                mergeSort(a, low, mid); 
                mergeSort(a, mid + 1, hight);  
                merge(a, low, mid, hight);  
                } 
            } 
            
    int main(void) 
    { 
        int str[1000000]; 
        int i, cnt; 
        printf("Enter number: ");
        scanf("%d", &cnt); 
        
        for(i = 0 ; i < cnt; i++) 
            scanf("%d", &str[i]); 

        mergeSort(str, 0, cnt - 1);

        for(i = 0; i < cnt; i++) 
            printf("%d ", str[i]);

        return 0;
    }
```
<br/>

> Java <br/>

```java
  import java.util.Scanner;
  ​
  public class baekjoon2751 {
      
      public static void main(String[] args){
          Scanner sc = new Scanner(System.in);
          
          int n = sc.nextInt();
          int[] arr = new int[n];
          
          for(int i = 0; i < n; i++){
              arr[i] = sc.nextInt();
          }
          
          mergeSort(arr);
          print_arr(arr);
          
      }
      
      // 분할 하는 부분 
      public static void mergeSort(int[] arr){
          
          int n = arr.length;
          if(n == 1) return;
          
          int[] s1 = new int[n/2];
          int[] s2 = new int[n - n/2];
          
          for(int i = 0; i < n/2; i++){
              s1[i] = arr[i];
          }
          
          for(int i = 0; i < n - n/2; i++){
              s2[i] = arr[i + n/2];
          }
          
          // 배열의 길이 1이 될때까지 계속 분할 
          mergeSort(s1);
          mergeSort(s2);
          
          // 분할된 배열을 병합 
          merge(s1, s2, arr);
          
      }
      
      // 병합하는 부분 
      public static void merge(int[] s1, int[] s2, int[] arr){
          int n1 = 0, n2 = 0, n3 = 0;
          
          while(n1 < s1.length){
              if(n2 <  s2.length){
                  if(s1[n1] < s2[n2]){
                      arr[n3] = s1[n1];
                      n1++;
                  }else{
                      arr[n3] = s2[n2];
                      n2++;
                  }
                  n3++;
              }else{
                  while(n1 < s1.length){
                      arr[n3] = s1[n1];
                      n1++;
                      n3++;
                  }
              }
          }
          while(n2 < s2.length){
              arr[n3] = s2[n2];
              n2++;
              n3++;
          }
      }
      
      public static void print_arr(int[] arr){
          for(int i : arr){
              System.out.print(i);
          }
          System.out.println();
      }
  }
  ```


## Reference
- [Youtube - 엔지니어대한민국](https://www.youtube.com/watch?v=QAyl79dCO_k)
- Image & Notion Ref. - [Github](https://gmlwjd9405.github.io/2018/05/08/algorithm-merge-sort.html)