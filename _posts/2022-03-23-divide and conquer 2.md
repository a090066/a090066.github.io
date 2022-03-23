# Divide and Conquer / 분할 정복 알고리즘

#### 앞의 글에서는 컴퓨터알고리즘 강의에서 사용하는 교재 *양성봉 著. 알기 쉬운 알고리즘* 를 중심으로 **분할 정복 알고리즘(Divide-and-Conquer Algorithm)** 의 기본 개념 및 알고리즘에 알아보았고 퀵 정렬 알고리즘에 대해 짧게나마 정리해보았다. 이번 포스트에서는 분할 정복 알고리즘 중 **합병 정렬(Merge Sort)** 에 대해 더욱 자세히 정리하고 관련된 문제도 다뤄볼 것이다.
<br/>

**목차**는 다음과 같다.

* 합병 정렬
   * ① 정리
   * ② 합병 정렬 알고리즘이 적용된 문제
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

## ② 합병 정렬 알고리즘이 적용된 문제 <br/>
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

