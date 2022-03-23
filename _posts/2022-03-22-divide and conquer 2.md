# Divide and Conquer / 분할 정복 알고리즘

#### 앞의 글에서 **분할 정복 알고리즘(Divide-and-Conquer Algorithm)** 의 기본 개념 및 알고리즘에 알아보았고 퀵 정렬 알고리즘에 대해 짧게나마 정리해보았다. 이번 포스트에서는 분할 정복 알고리즘 중 **합병 정렬(Merge Sort)** 에 대해 더욱 자세히 정리하고 관련된 문제도 다뤄볼 것이다.
<br/>

**목차**는 다음과 같다.

* 합병 정렬
   * 정리
   * 합병 정렬 알고리즘이 적용된 문제
<br/>

___

## 합병 정렬(Merge Sort)
> 배열(or 리스트)을 같은 크기로 **두 개로 분할**하여 정렬하고, 정렬된 배열을 **다시 합하여** 원하는 방식으로 정렬하는 방법을 합병 정렬이라고 한다.
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

![image](https://gmlwjd9405.github.io/images/algorithm-merge-sort/merge-sort-concepts.png)
*fig1) 이해를 돕기위한 합병정렬 구조*

<br/>

![image](https://gmlwjd9405.github.io/images/algorithm-merge-sort/merge-sort.png)
*fig2) 이해를 돕기위한 합병정렬 알고리즘 도식화*


## Reference
- [Youtube - 엔지니어대한민국](https://www.youtube.com/watch?v=QAyl79dCO_k)
- Image & Notion - [Github](https://gmlwjd9405.github.io/2018/05/08/algorithm-merge-sort.html)




