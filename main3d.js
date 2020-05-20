package com.example.gymmanagement;
import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;
import java.util.ArrayList;
import java.util.Arrays;
public class Main3dActivity extends AppCompatActivity {
   TextView name,name2,train;
   @Override
   protected void onCreate(Bundle savedInstanceState) {
       super.onCreate(savedInstanceState);
       setContentView(R.layout.activity_main3d);
       name=(TextView) findViewById(R.id.textView);
       name2=(TextView) findViewById(R.id.textView2);
       train=(TextView) findViewById(R.id.textView4);
       Bundle bundle=getIntent().getExtras();
       String value1=bundle.getString("value3");
       String value4=bundle.getString("value4");
       name2.setText(value1);
       train.setText(value4);
       String[] states = {"10:00 am - 11:00 am","11:00 am - 01:00 pm","02:00 pm - 03:30 pm","03:00 pm - 04:00 pm",":4:00 pm - 06:00 pm","05:00 pm - 06:00 pm","06:00pm - 7:00pm"};
       final ArrayList arrayList = new ArrayList(Arrays.asList(states));
       ListView listView = findViewById(R.id.listview);
       ArrayAdapter arrayAdapter = new ArrayAdapter(this,android.R.layout.simple_list_item_1,arrayList);
       listView.setAdapter(arrayAdapter);
       listView.setOnItemClickListener(new AdapterView.OnItemClickListener()
       {
           @Override
           public void onItemClick(AdapterView<?> parent, View view, int position, long id)
           {
               name.setText((String) arrayList.get(position));
               Toast.makeText(getApplicationContext(),"You selected the slot: "+arrayList.get(position),Toast.LENGTH_SHORT).show();
           }
       });
   }

   public void done(View view) {
       final String Trainer = name.getText().toString();
       final String namee = name2.getText().toString();
       final String Trainer1 = train.getText().toString();
       Intent intent=new Intent(this,Main2Activity.class);
       intent.putExtra("value2", Trainer);
       intent.putExtra("value1", namee);
       intent.putExtra("value5", Trainer1);
       startActivity(intent);
   }
}
