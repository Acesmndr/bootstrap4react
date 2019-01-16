```jsx
<Calendar width='80%' height='400px'>
  <Calendar.Header primary sticky>
    <Calendar.HeaderItem sticky>
      Worker
    </Calendar.HeaderItem>
    <Calendar.HeaderItem>
      Sunday
    </Calendar.HeaderItem>
    <Calendar.HeaderItem>
      Monday
    </Calendar.HeaderItem>
    <Calendar.HeaderItem>
      Tuesday
    </Calendar.HeaderItem>
    <Calendar.HeaderItem>
      Wednesday
    </Calendar.HeaderItem>
    <Calendar.HeaderItem>
      Thursday
    </Calendar.HeaderItem>
    <Calendar.HeaderItem>
      Friday
    </Calendar.HeaderItem>
    <Calendar.HeaderItem>
      Saturday
    </Calendar.HeaderItem>
  </Calendar.Header>
  <Calendar.Row>
    <Calendar.Item sticky dark whiteText>
      <Text>Bruce Wayne</Text>
      <Text hide small textCentered>Wayne Enterprises</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text muted>29</Text>
      <Calendar.Event primary>Some Event</Calendar.Event>
      <Calendar.Event secondary>Some Event</Calendar.Event>
      <Calendar.Event success>Some Event</Calendar.Event>
      <Calendar.Event primary striped>Some Event</Calendar.Event>
    </Calendar.Item>
    <Calendar.Item>
      <Text muted>30</Text>
      <Text hide small textCentered muted>Monday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text muted>31</Text>
      <Text hide small textCentered muted>Tuesday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>1</Text>
      <Text hide small textCentered>Wednesday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>2</Text>
      <Text hide small textCentered>Thursday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>3</Text>
      <Text hide small textCentered>Friday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>4</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
  </Calendar.Row>
 <Calendar.Row>
    <Calendar.Item sticky dark whiteText>
      <Text>Clark Kent</Text>
      <Text hide small textCentered>Daily Planet</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>5</Text>
      <Text hide small textCentered>Sunday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>6</Text>
      <Text hide small textCentered>Monday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>7</Text>
      <Text hide small textCentered>Tuesday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>8</Text>
      <Text hide small textCentered>Wednesday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>9</Text>
      <Text hide small textCentered>Thursday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>10</Text>
      <Text hide small textCentered>Friday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>11</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
  </Calendar.Row>
  <Calendar.Row>
    <Calendar.Item sticky dark whiteText>
      <Text>Barry Allen</Text>
      <Text hide small textCentered>Star Labs</Text>      
    </Calendar.Item>
    <Calendar.Item>
      <Text>12</Text>
      <Text hide small textCentered>Sunday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>13</Text>
      <Text hide small textCentered>Monday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>14</Text>
      <Text hide small textCentered>Tuesday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>15</Text>
      <Text hide small textCentered>Wednesday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>16</Text>
      <Text hide small textCentered>Thursday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>17</Text>
      <Text hide small textCentered>Friday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>18</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
  </Calendar.Row>
  <Calendar.Row>
    <Calendar.Item sticky dark whiteText>
      <Text>Lex Luthor</Text>
      <Text hide small textCentered>Lex Corp</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>19</Text>
      <Text hide small textCentered>Sunday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>20</Text>
      <Text hide small textCentered>Monday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>21</Text>
      <Text hide small textCentered>Tuesday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>22</Text>
      <Text hide small textCentered>Wednesday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>23</Text>
      <Text hide small textCentered>Thursday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>24</Text>
      <Text hide small textCentered>Friday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>25</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
  </Calendar.Row>
  <Calendar.Row>
    <Calendar.Item sticky dark whiteText>
      <Text>Ray Fisher</Text>
      <Text hide small textCentered>-</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>26</Text>
      <Text hide small textCentered>Sunday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>27</Text>
      <Text hide small textCentered>Monday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>28</Text>
      <Text hide small textCentered>Tuesday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>29</Text>
      <Text hide small textCentered>Wednesday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>30</Text>
      <Text hide small textCentered>Thursday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text muted>1</Text>
      <Text hide small textCentered muted>Friday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text muted>2</Text>
      <Text hide small textCentered muted>Saturday</Text>
    </Calendar.Item>
  </Calendar.Row>
</Calendar>
```


```jsx
<Calendar width='100%'>
  <Calendar.Header primary sticky>
    <Calendar.HeaderItem width='14vw' sticky>
      <Text>Worker</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
    <Calendar.HeaderItem width='7vw'>
      <Text>Date</Text>
    </Calendar.HeaderItem>
  </Calendar.Header>
  <Calendar.Row>
    <Calendar.Item width='14vw' height='9vw' sticky dark whiteText>
      <Text>Bruce Wayne</Text>
      <Text hide small textCentered>Wayne Enterprises</Text>
    </Calendar.Item>
    <Calendar.Item width='7vw' height='9vw'>
      <Text muted>29</Text>
      <Calendar.Event primary>Some Event</Calendar.Event>
      <Calendar.Event secondary>Some Event</Calendar.Event>
      <Calendar.Event success>Some Event</Calendar.Event>
      <Calendar.Event primary striped>Some Event</Calendar.Event>
    </Calendar.Item>
    <Calendar.Item width='7vw' height='9vw'>
      <Text muted>30</Text>
      <Text hide small textCentered muted>Monday</Text>
    </Calendar.Item>
    <Calendar.Item width='7vw' height='9vw'>
      <Text muted>31</Text>
      <Text hide small textCentered muted>Tuesday</Text>
    </Calendar.Item>
    <Calendar.Item width='7vw' height='9vw'>
      <Text>1</Text>
      <Text hide small textCentered>Wednesday</Text>
    </Calendar.Item>
    <Calendar.Item width='7vw' height='9vw'>
      <Text>2</Text>
      <Text hide small textCentered>Thursday</Text>
    </Calendar.Item>
    <Calendar.Item width='7vw' height='9vw'>
      <Text>3</Text>
      <Text hide small textCentered>Friday</Text>
    </Calendar.Item>
    <Calendar.Item width='7vw' height='9vw'>
      <Text>4</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>5</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>6</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>7</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>8</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>9</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>10</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>11</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>12</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>13</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>14</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>15</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>16</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>17</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>18</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>19</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>20</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>21</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>22</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>23</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>24</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>25</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>26</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>27</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>28</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>29</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>30</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
     <Calendar.Item width='7vw' height='9vw'>
      <Text>31</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
  </Calendar.Row>
</Calendar>
```

Full Width Calendar

```jsx
<Calendar>
  <Calendar.Header primary sticky>
    <Calendar.HeaderItem>
      Sunday
    </Calendar.HeaderItem>
    <Calendar.HeaderItem>
      Monday
    </Calendar.HeaderItem>
    <Calendar.HeaderItem>
      Tuesday
    </Calendar.HeaderItem>
    <Calendar.HeaderItem>
      Wednesday
    </Calendar.HeaderItem>
    <Calendar.HeaderItem>
      Thursday
    </Calendar.HeaderItem>
    <Calendar.HeaderItem>
      Friday
    </Calendar.HeaderItem>
    <Calendar.HeaderItem>
      Saturday
    </Calendar.HeaderItem>
  </Calendar.Header>
  <Calendar.Row>
    <Calendar.Item>
      <Text muted>29</Text>
      <Calendar.Event primary>Some Event</Calendar.Event>
      <Calendar.Event secondary>Some Event</Calendar.Event>
      <Calendar.Event success>Some Event</Calendar.Event>
      <Calendar.Event primary striped>Some Event</Calendar.Event>
    </Calendar.Item>
    <Calendar.Item>
      <Text muted>30</Text>
      <Text hide small textCentered muted>Monday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text muted>31</Text>
      <Text hide small textCentered muted>Tuesday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>1</Text>
      <Text hide small textCentered>Wednesday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>2</Text>
      <Text hide small textCentered>Thursday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>3</Text>
      <Text hide small textCentered>Friday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>4</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
  </Calendar.Row>
  <Calendar.Row>
    <Calendar.Item>
      <Text>5</Text>
      <Text hide small textCentered>Sunday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>6</Text>
      <Text hide small textCentered>Monday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>7</Text>
      <Text hide small textCentered>Tuesday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>8</Text>
      <Text hide small textCentered>Wednesday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>9</Text>
      <Text hide small textCentered>Thursday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>10</Text>
      <Text hide small textCentered>Friday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>11</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
  </Calendar.Row>
  <Calendar.Row>
    <Calendar.Item>
      <Text>12</Text>
      <Text hide small textCentered>Sunday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>13</Text>
      <Text hide small textCentered>Monday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>14</Text>
      <Text hide small textCentered>Tuesday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>15</Text>
      <Text hide small textCentered>Wednesday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>16</Text>
      <Text hide small textCentered>Thursday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>17</Text>
      <Text hide small textCentered>Friday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>18</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
  </Calendar.Row>
  <Calendar.Row>
    <Calendar.Item>
      <Text>19</Text>
      <Text hide small textCentered>Sunday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>20</Text>
      <Text hide small textCentered>Monday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>21</Text>
      <Text hide small textCentered>Tuesday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>22</Text>
      <Text hide small textCentered>Wednesday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>23</Text>
      <Text hide small textCentered>Thursday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>24</Text>
      <Text hide small textCentered>Friday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>25</Text>
      <Text hide small textCentered>Saturday</Text>
    </Calendar.Item>
  </Calendar.Row>
  <Calendar.Row>
    <Calendar.Item>
      <Text>26</Text>
      <Text hide small textCentered>Sunday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>27</Text>
      <Text hide small textCentered>Monday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>28</Text>
      <Text hide small textCentered>Tuesday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>29</Text>
      <Text hide small textCentered>Wednesday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text>30</Text>
      <Text hide small textCentered>Thursday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text muted>1</Text>
      <Text hide small textCentered muted>Friday</Text>
    </Calendar.Item>
    <Calendar.Item>
      <Text muted>2</Text>
      <Text hide small textCentered muted>Saturday</Text>
    </Calendar.Item>
  </Calendar.Row>
</Calendar>
```