#include <bits/stdc++.h>
using namespace std;
class test1
{
public:
    int a[1000];
    int size = 10;
    int front = 1, rear = 0;
    bool empty()
    {
        if (front > rear)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
    bool full()
    {
        if (rear == size)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
    void Enqueue(int data)
    {
        if (!full())
        {
            rear++;
            a[rear] = data;
        }
    }
    int Dequeue()
    {
        if (!empty())
        {
            int temp = a[front];
            front++;
            return temp;
        }
        return -1;
    }
    void print()
    {
        // cout <<"queue";
        for (int i = front; i <= rear; i++)
        {
            cout << a[i] << " ";
        }
        cout << endl;
    }
};

int main()
{
    test1 t;
    int i, X;
    char put;
    int count = 0;
    do
    {
        cin >> put;
        if (put == 'e')
        {
            cin >> X;
            t.Enqueue(X);
        }
        else if (put == 'd')
        {
            cout << t.a[t.front];
            cout << endl;
            t.Dequeue();
        }
        else if (put == 'p')
        {
            t.print();
        }
        else if (put == 'n')
        {
            for (int i = t.front; i <= t.rear; i++)
            {
                count++;
            }
            cout << count << endl;
            count = 0;
        }
        else if (put == 's')
        {
            for (int i = t.front; i <= t.rear; i++)
            {
                count++;
            }
            if (count > 0)
            {
                cout << t.a[t.front] << " " << t.a[t.rear] << endl;
            }
            else
            {
            }
            count = 0;
        }

    } while (put != 'x');
}
// for (i = 1; i <= 10 ; i++)
// {
//     t.Enqueue(i);
//     cout<<"Enqueue "<<i<<"\t";
//     t.print();
// }
// for (i = 1; i <= 10 ; i++)
// {
//     cout<<"Dequeue "<<i<<"\t";
//     t.Dequeue();
//     t.print();
// }